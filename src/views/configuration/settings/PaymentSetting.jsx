import TableLayoutComp from "../../../components/Tables/TableLayoutComp";

function PaymentSetting() {
  return (
    <div className="paymentPage cp">
      <TableLayoutComp title={"Razorpay"} showSwitch={true}>
        <div className="razoypayCard cp">
          <div>
            <label htmlFor="Rsecretkey" className="label">
              KEY SECRET
            </label>
            <input
              type="text"
              id="Rsecretkeyss"
              className="input"
              placeholder="Enter KEY SECRET"
            />
          </div>
          <div>
            <label htmlFor="RsecretId" className="label">
              KEY ID
            </label>
            <input
              type="text"
              id="RsecretId"
              className="input"
              placeholder="Enter KEY ID"
            />
          </div>
        </div>
      </TableLayoutComp>
    </div>
  );
}

export default PaymentSetting;
