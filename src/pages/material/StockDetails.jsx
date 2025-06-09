import { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BASE_URL } from "../../config";
function StockDetails() {
  const { id, name } = useParams();
  console.log(name);
  const token = JSON.parse(
    localStorage.getItem("employeROyalmadeLogin")
  )?.token;
  const [refreshKey, setrefreshkey] = useState(0);
  const [existingStockId, setExistingStokId] = useState("");
  const [ShowExistingAddStokForm, setShowExistingAddStokForm] = useState(false);
  const [existingStockAmout, setexistingStockAmout] = useState("");
  const [existingStockQuantity, setexistingStockQuantity] = useState("");
  const [existingStockUsedId, setExistingStockUsedId] = useState("");
  const [existingStockUsedFormShow, setExistingStockUsedFormShow] =
    useState(false);
  const [usedQuantity, setUsedQuantity] = useState("");
  const [HistoryUsedStock, setHistoryUsedStock] = useState([]);
  function handleAddExistingStock(id) {
    setExistingStokId(id);
    setShowExistingAddStokForm(true);
  }
  async function handleupdateexistingStock(e) {
    e.preventDefault();

    const data = new URLSearchParams();
    data.append("price", existingStockAmout);
    data.append("quantityString", existingStockQuantity);

    try {
      const response = await axios.post(
        `${BASE_URL}/products/${existingStockId}/add-stock`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200) {
        alert("Details Added Successfully");
        setrefreshkey(refreshKey + 1);
        setexistingStockAmout("");
        setexistingStockQuantity("");
        setShowExistingAddStokForm(false);
      }
    } catch (error) {
      console.log("Error adding stock:", error);
      alert("Something went wrong. Please try again.");
    }
  }

  function handleStockUsed(id) {
    setExistingStockUsedId(id);
    setExistingStockUsedFormShow(true);
  }
  async function handleAddUsedQuantity(e) {
    e.preventDefault();
    if (!token) {
      alert("token is unavailable");
    }

    const body = {
      quantityUsed: usedQuantity,
    };

    try {
      const response = await axios.post(
        `${BASE_URL}/products/${existingStockUsedId}/use-stock`,
        body,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        alert("Quantity removed successfully");
        setrefreshkey(refreshKey + 1);
        setUsedQuantity("");
        setExistingStockUsedFormShow(false);
      }
    } catch (error) {
      console.error("Error using stock:", error);
      alert(error.response?.data || "Failed to remove quantity");
    }
  }

  async function handleCheckHistory(id) {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}/usages`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(response.data);
      setHistoryUsedStock(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <h2
        style={{ marginLeft: "25px", marginTop: "40px", textAlign: "center" }}
      >
        {name} Stock Details
      </h2>
      <div className="stock_details_button_container">
        <button
          onClick={() => handleAddExistingStock(id)}
          className="Stock_in_btn"
        >
          Stock In
        </button>
        <button onClick={() => handleStockUsed(id)} className="Stock_in_btn">
          Stock Out{" "}
        </button>
        <button onClick={() => handleCheckHistory(id)} className="Stock_in_btn">
          View Used Stock Details
        </button>
      </div>

      {ShowExistingAddStokForm && (
        <>
          <div className="existing_stock_add_form_wrapper">
            <form
              action=""
              className="existing_stock_add_form"
              onSubmit={handleupdateexistingStock}
            >
              <button
                onClick={() => setShowExistingAddStokForm(false)}
                className="existing_stock_add_form_close_button"
              >
                X
              </button>
              <input
                type="text"
                placeholder="Enter Price"
                className="existing_stock_add_form_input"
                value={existingStockAmout}
                onChange={(e) => setexistingStockAmout(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter Quantity"
                className="existing_stock_add_form_input"
                value={existingStockQuantity}
                onChange={(e) => setexistingStockQuantity(e.target.value)}
              />
              <button className="existing_stock_add_form_submit_btn">
                Submit
              </button>
            </form>
          </div>
        </>
      )}
      {existingStockUsedFormShow && (
        <div className="usedstock_form_overlay">
          <form
            className="usedQuantiyStock_form"
            onSubmit={handleAddUsedQuantity}
          >
            <button
              type="button"
              onClick={() => setExistingStockUsedFormShow(false)}
              className="usedstock_form_close_button"
            >
              X
            </button>
            <input
              type="text"
              className="usedstock_form_input"
              placeholder="Enter Used Quantity"
              value={usedQuantity}
              onChange={(e) => setUsedQuantity(e.target.value)}
            />
            <button type="submit" className="usedstock_form_submit_button">
              Submit
            </button>
          </form>
        </div>
      )}
      {HistoryUsedStock.length > 0 && (
        <div className="usedStocktable-responsive-wrapper">
          <table className="usedStockDetailTable">
            <thead>
              <tr>
                <th>Sr No</th>
                <th>Quantity Used</th>
                <th>Date Used</th>
              </tr>
            </thead>
            <tbody>
              {HistoryUsedStock.length > 0 ? (
                HistoryUsedStock.map((item, index) => {
                  const dateObj = new Date(item.usedAt);
                  const day = String(dateObj.getDate()).padStart(2, "0");
                  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
                  const year = dateObj.getFullYear();
                  const formattedDate = `${day}-${month}-${year}`;

                  return (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{item.quantityUsed}</td>
                      <td>{formattedDate}</td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="3" style={{ textAlign: "center" }}>
                    No history found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default StockDetails;
