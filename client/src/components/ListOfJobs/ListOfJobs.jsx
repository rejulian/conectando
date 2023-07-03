import React from 'react'
import { useParams } from 'react-router-dom'
import './Jobs.css'
import Card from '../Card/Card'
import Form from '../Form/Form'
const ListOfJobs = () => {

    const { job } = useParams()
    const cleanJob = job.slice(1);

    return (
        <main className='jobs__container'>
            <Form value={cleanJob}/>
            <section className='jobs__container__list'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />    
            </section>
        </main>
    )
}

export default ListOfJobs