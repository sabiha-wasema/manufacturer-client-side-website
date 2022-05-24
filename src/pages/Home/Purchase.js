import React from 'react';


const Purchase = () => {

    return (
        <div >
            <form>
                <div class="hero  bg-base-100 flex justify-center items-center mt-20  px-20 mb-16">
                    <div class="hero-content flex-col lg:flex-row px-20">
                        <div class="text-center lg:text-left">
                            <h1 class="text-5xl font-bold">Purchase now!</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-200 mt-7">
                            <h2 className='text-3xl font-bold text-center mt-7'>Purchase</h2>
                            <form class="card-body">
                                <div class="form-control">
                                    <input type="text" placeholder="Name" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder="Email" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="number" placeholder="Phone" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder="Address" class="input input-bordered" />
                                </div>
                                <div class="form-control">
                                    <input type="text" placeholder="Product/Tools name" class="input input-bordered" />
                                </div>
                                <div class="form-control mt-5">
                                    <input type="submit" value="Submit" class="btn btn-primary" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
};

export default Purchase;