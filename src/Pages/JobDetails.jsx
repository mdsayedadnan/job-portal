import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const JobDetails = () => {
    const job = useLoaderData();
const {_id, title, company, company_logo, requirements
    , description, location, salaryRange }=job
    return (
        <div>
            <div>
                <div className="card bg-neutral text-neutral-content w-96">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{title}</h2>
                        <p>{company}</p>
                        <p></p>
                        <div className="card-actions justify-end">
                            <Link to={`/jobApply/${_id}`}>
                            <button className="btn btn-primary">Accept</button>

                            </Link>
                            <button className="btn btn-outline">Deny</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;