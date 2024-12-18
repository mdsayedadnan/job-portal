import React from 'react';
import { FaDollarSign, FaMapMarked } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HotJobCard = ({ job }) => {
    const {_id, title, company, company_logo, requirements
        , description, location, salaryRange } = job
    return (
        <div>
            <div className="card bg-base-500 p-4 mt-5 shadow-2xl ">
                <div className='flex gap-2 m-2'>
                    <figure>
                        <img className='w-16 bg-green-700'
                            src={company_logo}
                            alt="Shoes" />
                    </figure>
                    <div>
                        <h1 className="text-2xl">{company}</h1>
                        <p className='flex gap-2 items-center'><FaMapMarked></FaMapMarked>{location}</p>
                    </div>

                </div>
                <div className="card-body">
                    <div className='flex items-center gap-2'>
                        <h2 className="card-title">{title}</h2>
                        <div className="badge badge-secondary">NEW</div>
                    </div>

                    <p>{description}</p>
                    <div className='flex gap-2 flex-wrap'>
                        {
                            requirements.map((skill,index) => <p className='border rounded-md text-center p-2 hover:text-white hover:bg-green-500'  key={index}>
                                {skill}</p>)
                        }
                    </div>
                    <div className="card-actions justify-end items-center ">

                        <p className='flex mt-4 items-center border rounded-md text-center p-2 hover:text-white hover:bg-green-500'> Salary:<FaDollarSign></FaDollarSign>{salaryRange.min} - {salaryRange.max} {salaryRange.currency}</p>
                        <Link to={`/jobs/${_id}`}>
                        <button className="btn btn-outline">Apply</button>

                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotJobCard;