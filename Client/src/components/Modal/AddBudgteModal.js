import { TfiClose } from "react-icons/tfi"
import { useState } from "react";
import { useBudgets } from "../../Context/BudgetContext";
import "./AddBudgetModal.css";

export default function AddBudgteModal({show, setShow}) {

    const [nameText, setNameText] = useState('');
    const [maxText, setMaxText] = useState('');


    const {addBudget} = useBudgets();

    const handleSubmit = (e) => {
        e.preventDefault();

        const max = parseFloat(maxText, 10);
        addBudget(nameText, max);

        setShow(!show);
    }
   
  return (
    <div className="modal-add-budget">
        <div className="modal-header-add-budget">
            <div className="modal-title-add-budget">Add Budget</div>
            <TfiClose className="TfiClose-budget" onClick={() => setShow(!show)}/>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className="modal-body-add-budget" style={{fontSize : "1.5rem"}}>
                <label className="modal-body-heading1" style = {{paddingLeft : "1rem"}}>Name</label>
                    <input 
                        autoFocus
                        type="text" 
                        required
                        value = {nameText}
                        onChange= {(e) => setNameText(e.target.value)}
                        style = {{ 
                            height : "2rem",
                            width : "25rem",
                            margin : "1rem"
                        }}
                    />
                <label className="modal-body-heading2" style = {{paddingLeft : "1rem"}}>Maximum Spending</label>
                    <input 
                        autoFocus
                        type = "currency"
                        required
                        value = {maxText}
                        onChange= {(e) => setMaxText(e.target.value)}
                        style = {{
                            height : "2rem",
                            width : "25rem",
                            margin : "1rem"
                        }}
                    />
            </div>
            <div 
                style={{
                    zIndex : "auto",
                    display : "flex", 
                    justifyContent : "flex-end",
                    marginBottom : "auto"
                }}>
                <button className="modal-submit-add-budget">Add</button>
                {/* <button className="modal-submit-add-budget" type="submit" onClick={(e) => handleSubmit(e)}>Add</button> */}
            </div>
        </form>
    </div>

  )
}
