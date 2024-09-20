import React, { useLayoutEffect, useState, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Button as MuiButton, Box } from '@mui/material';
import { printLog } from '../Utils/Utils';
import { OrderPageHeader } from '../OrderPageHeader/OrderPageHeader';
import BasicModal from '../BasicModel/BasicModel';
import Card from '../Card/Card';
import Notification from '../Notification/Notification';
import LTLQuote from '../LTLQuote/LTLQuote';
import TabsComponent from '../TabsComponent/TabsComponent';
import { fetchOffices } from '../store/Office/services'; // Adjust the path based on your folder structure

type Office = {
  name: string;
  location: string;
};

export default function Offices() {
  const [data, setData] = useState<Office[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  const toggleModal = () => {
    printLog('toggleModal');
    setShowModal(!showModal);
  };

  useLayoutEffect(() => {
    async function fetchData() {
      try {
        const offices = await fetchOffices(); // Use fetchOffices from services.ts
        setData(offices);
      } catch (error) {
        console.error(error); // Log error message
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <OrderPageHeader />
      <Grid container spacing={2} style={{ marginTop: '-25px' }}>
        <Grid item xs={6}>
          <Card startTitle="Card Info" endTitle="Filter Date" raised>
            Card1
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card startTitle="Card Info" endTitle="Filter Date" raised>
            Card2
          </Card>
        </Grid>
      </Grid>
      <p style={{ marginBottom: '-11px' }}>Offices</p>
      <p style={{ marginBottom: '4px' }}>Offices</p>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        Home
      </Link>
      {loading && <p>Loading...</p>}
        {data.map((item) => (
          <div style={{paddingBottom:"3px"}} key={item.name}>{item.name}</div>
        ))}
      {/* <p style={{ marginBottom: '-11px', marginTop: '-10px' }}>Office1</p>
     <p>Office2</p> */}
      <MuiButton variant="outlined" onClick={toggleModal}>
        Open Modal
      </MuiButton>
      {showModal && (
        <BasicModal open={true} title="Modal Title" handleClose={toggleModal}>
          <div>Modal Content</div>
        </BasicModal>
      )}
      <Box
        sx={{
          border: '3px solid rgb(245 157 37)',
          borderRadius: '10px',
          padding: '3px',
          marginTop: '3px',
        }}
      >
        <Notification type="warning">Warning Message</Notification>
      </Box>
      <LTLQuote />
      <TabsComponent
        activeTab={activeTab}
        tabs={[
          'CROSS COUNTRY FREIGHT SERVICE INC.$2,1500.00',
          'asddd',
          'sssssss',
          'akash',
          'pandey',
          'shaktiman',
          'ssssssss',
          'ssssdffsfs',
        ]}
        onTabClick={(index: number) => setActiveTab(index)}
      />
      <Suspense fallback={<div className="loader">Loading...</div>}>
        {activeTab === 0 && <div>Tab 0</div>}
        {activeTab === 1 && <div>Tab 1</div>}
        {activeTab === 2 && <div>Tab 2</div>}
        {activeTab === 3 && <div>Tab 3</div>}
        {activeTab === 4 && <div>Tab 4</div>}
        {activeTab > 4 && <div>Tab 4+</div>}
      </Suspense>
    </div>
  );
}
