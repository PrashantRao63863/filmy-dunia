import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";

const Checkout = props => {

    const [isPaymentLoading, setPaymentLoading] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const payMoney = async (e) => {
        const clientSecret = "sk_test_4ypbMh4aR9gRNnUkQCwgOyCT00rSoAbXzZ";
        e.preventDefault();
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: "Leon Kennedy",
                },
            },
        });
        setPaymentLoading(false);
        if (paymentResult.error) {
            alert(paymentResult.error.message);
            console.log(paymentResult.error.message);
        } else {
            if (paymentResult.paymentIntent.status === "succeeded") {
                alert("Success!");
                console.log(paymentResult);
            }
        }
    };

    return (
        <div>
            <h1>Checkout Here</h1>

            <form
                onSubmit={payMoney}
            >
                <div

                >
                    <CardElement
                        className="card"
                        options={{
                            style: {
                                base: {
                                    backgroundColor: "white"
                                }
                            },
                        }}
                    />
                    <button
                        className="pay-button"
                        disabled={isPaymentLoading}
                    >
                        {isPaymentLoading ? "Loading..." : "Pay"}
                    </button>
                </div>
            </form>

        </div>
    )
}


export default Checkout;