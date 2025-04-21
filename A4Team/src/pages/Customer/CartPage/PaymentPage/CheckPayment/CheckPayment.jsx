import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreAlert } from "../../../../../hooks/alert";
import { checkPaymentStatus } from "../../../../../api/paymentService";


function CheckPayment() {
    const navigate = useNavigate();
    const { callAlert, callErrorAlert } = useStoreAlert();

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        console.log("params: ", params);

        const paymentParams = {
            vnp_Amount: params.get('vnp_Amount'),
            vnp_TransactionNo: params.get('vnp_TransactionNo'),
            vnp_TransactionStatus: params.get('vnp_TransactionStatus')
        };

        console.log("VNP Transaction: ",vnp_TransactionNo);

        const handleCheckPayment = async () => {
            try {
                const res = await checkPaymentStatus(paymentParams);
                if (res === "ordersuccess") {
                    navigate("/game-activation");
                    callAlert("We are pleased to inform you that your order has been successfully paid.")
                }
                else {
                    navigate("/payment-failed");
                    callErrorAlert("We regret to inform you that your payment was unsuccessful. Please try again.")
                }
            }
            catch (error) {
                console.log("Error: ", error);
            }
        };

        handleCheckPayment();
    }, [navigate]);

    return null;
}

export default CheckPayment;