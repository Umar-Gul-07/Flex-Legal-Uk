import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import PageTitle from './include/PageTitle';
import { Link } from 'react-router-dom';
 import api from '../../Utils/Axios';
import { toast } from 'react-toastify';
import { server_ip } from '../../Utils/Data';

function Attorneys({ title }) {
 
  const [attorneys, setAttorneys] = useState([]);
  const [loading, setLoading] = useState(true); // New state for loading

  const get_all_attorneys = async () => {
    try {
      const { data } = await api.get(`/lawyer/get_all_attorney`);

      if (Array.isArray(data)) {
        setAttorneys(data);
      } else {
        toast.error('Unexpected response format');
      }
    } catch (error) {
      toast.error(error.message || 'Failed to fetch attorneys');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    get_all_attorneys();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading state while fetching data
  }

  return (
    <>
      <Helmet><title>{title}</title></Helmet>

      <PageTitle title={title} />

      <div className="parallax-section">
        <div className="container">
          <div className="row">

            
            {attorneys.length > 0 ? (
              attorneys.map((attorney) => (
                <div className="col-md-3 col-sm-6" key={attorney._id}>
                  <Link to={`/attorney-details?data=${encodeURIComponent(JSON.stringify(attorney))}`}>
                    <div className="team-thumb">
                      <div className="thumb-image">
                        <img
<<<<<<< HEAD
                          src={attorney.profileImage || '/assets/website/images/ahmi2.jpg'}
=======
                          src={`${server_ip}/${attorney.image}` || '/assets/website/images/team/team-img1.jpg'}
>>>>>>> ba904c10267e8e27df0beeec66a52b48cc3f9d66
                          className="animate"
                          alt={`${attorney.firstName} ${attorney.lastName}`}
                        />
                      </div>
                      <h4>{attorney.firstName} {attorney.lastName}</h4>
                      <h5>Attorney</h5>
                    </div>
                  </Link>
                </div>
              ))
            ) : (
              <div className="col-12">
                <p className='text-danger text-center'>No Attorneys Found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Attorneys;
