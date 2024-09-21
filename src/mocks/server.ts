import { createServer, Model, Factory, Response } from 'miragejs';

interface Office {
    id: string;
    name: string;
    location: string;
}

export function makeServer() {
    return createServer({
        models: {
            office: Model.extend<Partial<Office>>({}),
        },

        factories: {
            office: Factory.extend({
                name(i: number) {
                    return `Office ${i + 1}`;
                },
                location(i: number) {
                    return `Location ${i + 1}`;
                },
            }),
        },

        seeds(server) {
            server.createList('office', 5); // Creates 5 predefined offices
        },

        routes() {
            this.namespace = 'api';
            this.timing = 500; // Simulate network latency

            // GET /api/offices
            this.get('/offices', (schema): Response => {
                const offices = schema.all('office');
                return new Response(200, {}, offices);
            });

            // GET /api/offices/:id
            this.get('/offices/:id', (schema, request): Response => {
                const id = request.params.id;
                const office = schema.find('office', id);

                if (office) {
                    return new Response(200, {}, office);
                } else {
                    return new Response(404, {}, { error: 'Office not found' });
                }
            });

            // POST /api/offices
            this.post('/offices', (schema, request): Response => {
                const attrs = JSON.parse(request.requestBody);
                const office = schema.create('office', attrs);
                return new Response(201, {}, office);
            });

            // PUT /api/offices/:id
            this.put('/offices/:id', (schema, request): Response => {
                const id = request.params.id;
                const attrs = JSON.parse(request.requestBody);
                const office = schema.find('office', id);

                if (office) {
                    office.update(attrs); // Update the office record in place
                    return new Response(200, {}, office); // Return the updated office directly
                } else {
                    return new Response(404, {}, { error: 'Office not found' });
                }
            });

            // DELETE /api/offices/:id
            this.del('/offices/:id', (schema, request): Response => {
                const id = request.params.id;
                const office = schema.find('office', id);

                if (office) {
                    office.destroy();
                    return new Response(204);
                } else {
                    return new Response(404, {}, { error: 'Office not found' });
                }
            });

            // Allow unhandled requests to pass through (e.g., static assets)
            this.passthrough();
        },
    });
}
