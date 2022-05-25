import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const PurchaseModal = ({ purchase, setPurchase }) => {
    const { _id, name, description, minimumquantity, availablequantity } = purchase;
    const [user, loading, error] = useAuthState(auth);

    const handlePurchase = event => {
        event.preventDefault();
        // const name = event.target.name.value;
        console.log(_id, name, description, minimumquantity,);

        const purchase = {
            toolId: _id,
            tool: name,
            customer: user.email,
            customerName: user.displayName,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/purchase', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchase)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    toast("Purchase is set");
                }
                else {
                    toast("Already Purchased");
                }
                setPurchase(null);
            });
    }



    return (
        <div>
            <input type="checkbox" id="purchase-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg mb-4">Booking for: {name}</h3>
                    <form onSubmit={handlePurchase} className='grid grid-cols-1 gap-4 justify-items-center'>
                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name="email" disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name="phone" placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="text" placeholder="Address" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" class="btn btn-primary w-full max-w-xs" />
                    </form>
                    <div class="modal-action">
                        <label for="purchase-modal" class="btn">Submit</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PurchaseModal;