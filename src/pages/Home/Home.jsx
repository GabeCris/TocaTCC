import React from 'react';
import Layout from '../../components/Layout/Layout';
import CardEvent from '../../components/CardEvent/CardEvent';

const Home = () => {
  return (
    <Layout title="Home">
        <CardEvent event={'futebol'} title={'Futebol'} date={25} initial_time={5} end_time={6} people={12}/>
        <CardEvent event={'handebol'} title={'handebol'} date={25} initial_time={5} end_time={6} people={12}/>
        <CardEvent event={'voleibol'} title={'voleibol'} date={25} initial_time={5} end_time={6} people={12}/>
    </Layout>
  )
}

export default Home