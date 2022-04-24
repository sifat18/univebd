import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import rev1 from '../images/landing/user1.jpg'
import rev2 from '../images/landing/user2.jpg'
import rev3 from '../images/landing/user3.jpg'
export default function ReviewCard() {
    return (
        // <section className='container mt-5'>
        //     <h1 className=''>Why learners love Educative</h1>
        //     <Container className='my-5 text-start'>
        //         <Row>
        //             <Col xs={12} md={5} className='bg-white shadow h-50 p-5'>
        //                 <div><i class="fa-solid fa-quote-left"></i></div>
        //                 <p className=' mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>
        //             </Col>
        //             <Col xs={0} md={1} ></Col>
        //             <Col xs={12} md={5} className='bg-white p-5 shadow '>
        //                 <div style={{ paddingTop: "-50px" }}> <i className="fa-solid fa-quote-left"></i>
        //                 </div>
        //                 <p className='mx-1 mt-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id possimus porro ipsam veritatis aspernatur fuga rerum accusamus ab aut provident? Beatae dolore, quisquam facilis veritatis neque ut accusantium reiciendis! Deserunt?</p>

        //             </Col>
        //         </Row>
        //     </Container>

        // </section>
        <Container className=''>
            <Row >

                <Col xs={12} md={4} className=" mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src={rev1} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0 ">মনির শেখ</h5>
                        <p className='text-start my-3 text-muted'>
                            আমি আগে ছোটোখাটো ইলেকট্রিক্যাল ওয়্যারিং এর কাজ করতাম। করোনার সময় আমার চাকুরি চলে যাওয়ার পর দীর্ঘদিন বাসায় বসে ছিলাম। এরপর ফেসবুকে এড দেখে ইউনিভের সোলার ইন্সটলেশন কোর্সটি করি। কোর্স শেষে আমার নাম্বারের ভিত্তিতে ইউনিভ আমাকে একটি সোলার কোম্পানিতে ভালো বেতনের চাকুরী খুঁজে দিয়েছে।
                        </p>

                    </div>
                </Col>
                <Col xs={12} md={4} className=" mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src={rev3} alt="" width="100" className="img-fluid rounded-circle  img-thumbnail shadow-sm" />
                        <h5 class="mb-0 ">আশিকুর রহমান</h5> <p className='text-start my-3 text-muted'>
                            আমি এসি রিপেয়ারের কাজ করি। কিন্তু সেন্ট্রাল এসি সিস্টেম ইন্সটল সম্পর্কে আমার কোন আইডিয়া ছিলো না। ইউনিভে সেন্ট্রাল এসি ইন্সটলেশন কোর্সটি করার পর এখন আমি বড় বড় এসির প্রজেক্টে কাজ করতে পারছি। আমার প্রথম ৬০০ টন সেন্ট্রাল এসি ইন্সটলেশনের কাজটি ইউনিভই ব্যাবস্থা করে দিয়েছে। বর্তমানে আমার মাসিক আয় পূর্বের চেয়ে দ্বিগুন হয়েছে।
                        </p>

                    </div>
                </Col>

                <Col xs={12} md={4} className=" mb-5">
                    <div class="bg-white rounded shadow-sm py-5 px-4"><img src={rev2} alt="" width="100" className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                        <h5 class="mb-0">আমিরুল ইসলাম</h5>
                        <p className='text-start text-muted my-3'>
                            আমি দ্বাদশ শ্রেণীর বিজ্ঞান বিভাগের একজন ছাত্র, বাড়ি মাদারীপুর। ইউনিভের গ্রাফিক্স ডিজাইন কোর্সটি আমি ভালো নাম্বার সহ সম্পন্ন করি। কোর্স শেষে আমার নাম্বার দেখে ঢাকার একটি গ্রাফিক্স ডিজাইন কোম্পানি আমাকে রিমোট জবের সুযোগ করে দিয়েছে। বর্তমানে আমি বাসায় বসে পড়াশোনার পাশাপাশি পার্টটাইম জব করছি, যাতে আমার হাতখরচের টাকা উঠে যাচ্ছে।
                        </p>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}
