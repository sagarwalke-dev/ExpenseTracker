import React from "react";
import "../components/css/ExpenseManager.css";
const ExpenseManager = () => {
  return (
    <>
      <div>
        <br></br><br></br>
        <h2 className="text-center">Personal Expense Manager</h2>
        <br></br>
        <div className="form-group mx-sm-3 mb-2">
          <button
            type="button"
            class="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
            data-whatever="@mdo"
            
          >
            Add Expense
            
          </button>
    
          
          

          <div 
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                    Add Expense
                  </h5> 
                  
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="recipient-name" class="col-form-label">
                        ItemName:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label">
                        Category:
                      </label>
                      <input
                        type="text"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label">
                        Amount:
                      </label>
                      <input
                        type="number"
                        class="form-control"
                        id="recipient-name"
                        placeholder="0.00"
                      />
                    </div>
                    <div class="form-group">
                      <label for="message-text" class="col-form-label">
                        ExpenseDate:
                      </label>
                      <input
                        type="date"
                        class="form-control"
                        id="recipient-name"
                      />
                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                 
                  <button type="button" class="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          <form class="form-inline">
            <div class="form-group mx-sm-3 mb-2">
              <input
                type="password"
                class="form-control"
                placeholder="Search"
              />
            </div>
            <button type="submit" class="btn btn-primary mb-2">
              Filter
            </button>
          </form>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ItemId</th>
              <th scope="col">ItemName</th>
              <th scope="col">Amount</th>
              <th scope="col">Expense Date</th>
              <th scope="col">Category</th>
              <th scope="col">Action Item</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>veggies</td>
              <td>$230</td>
              <td>07/01/2021</td>
              <td>Food</td>
              <td>
                <button type="submit" class="btn btn-secondary mb-2">
                  Edit
                </button>
                <button type="submit" class="btn btn-danger mb-2">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>veggies</td>
              <td>$230</td>
              <td>07/01/2021</td>
              <td>Food</td>
              <td>
              <button type="submit" class="btn btn-secondary mb-2">
                  Edit
                </button>
                <button type="submit" class="btn btn-danger mb-2">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>veggies</td>
              <td>$230</td>
              <td>07/01/2021</td>
              <td>Food</td>
              <td>
              <button type="submit" class="btn btn-secondary mb-2">
                  Edit
                </button>
                <button type="submit" class="btn btn-danger mb-2">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>veggies</td>
              <td>$230</td>
              <td>07/01/2021</td>
              <td>Food</td>
              <td>
              <button type="submit" class="btn btn-secondary mb-2">
                  Edit
                </button>
                <button type="submit" class="btn btn-danger mb-2">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>veggies</td>
              <td>$230</td>
              <td>07/01/2021</td>
              <td>Food</td>
              <td>
              <button type="submit" class="btn btn-secondary mb-2">
                  Edit
                </button>
                <button type="submit" class="btn btn-danger mb-2">
                  Delete
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>veggies</td>
              <td>$230</td>
              <td>07/01/2021</td>
              <td>Food</td>
              <td>
              <button type="submit" class="btn btn-secondary mb-2">
                  Edit
                </button>
                <button type="submit" class="btn btn-danger mb-2">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ExpenseManager;