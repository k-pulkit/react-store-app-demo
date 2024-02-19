import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red"
};

const ImageWithSpinner = ({ src, classes }) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
        {
            <div className='h-full w-full flex justify-center items-center'>
                {<ClipLoader color={'#123abc'} loading={loading} css={override} size={20}/>}
                <img
                    src={src}
                    alt="example"
                    onLoad={() => setTimeout(() => setLoading(false), 10)}
                    className={`${"object-cover object-center w-full h-[98%]"} ${loading ? 'hidden' : 'block'}`}
                />
            </div>
        } 
    </>
  );
};

export default ImageWithSpinner;
