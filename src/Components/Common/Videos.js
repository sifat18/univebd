import React from 'react'
import { Button, Button as p, Container, Ratio } from 'react-bootstrap'

export default function Videos({ link, basic, handl2, curIdx, breif, show, nexVideo, preVideo, videoControl }) {
    return (
        <>
            <Container className='text-center'>
                <Ratio aspectRatio="16x9">
                    <iframe src={link || basic}
                        frameborder='0'
                        allow='autoplay; encrypted-media'
                        allowfullscreen
                        title='Xray'
                        width="788" height="500"
                    />
                </Ratio >
                {breif && <div className="my-5 ms-5 ps-5 d-none d-md-block text-start">
                    <h2 className='fw-bold '>Module description</h2>
                    <hr className='' />
                    <p className=' fs-5 text-dark'>{breif}</p>
                </div>}
                {breif && <div className="my-5 d-block d-md-none text-start">
                    <h2 className='fw-bold '>Module description</h2>
                    <hr className='' />
                    <p className=' fs-5 text-dark'>{breif}</p>
                </div>}
                {show &&
                    <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={handl2}> Go to Quiz</p>
                }
            </Container>
            {/* {curIdx - 1 >= 0 &&
                <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={() => handle(curIdx - 1, false)}> আগের মডিউলে যান</p>
            }
            {curIdx >= 0 && curIdx + 1 <= maxMod &&
                <p className='btn btn-info text-white w-50 d-block mt-3 mx-auto' onClick={() => handle(curIdx + 1, true)}> পরের মডিউলে যান</p>
            } */}

            <div className="d-flex justify-content-between">
                {preVideo &&
                    <Button className='btn btn-info text-white  d-block mt-3 ' size='lg' onClick={() => videoControl(curIdx, preVideo)}> আগের ভিডিও  যান</Button>
                }
                {nexVideo &&
                    <Button className='btn btn-info text-white  d-block mt-3 ' size='lg' onClick={() => videoControl(curIdx, nexVideo)}> পরের ভিডিও  যান</Button>
                }
            </div>
        </>
    )
}
