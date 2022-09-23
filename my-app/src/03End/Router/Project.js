import React from "react";
function Project() {
    return(
        <div className="container-md">
        <h1 className="h1 text-center">LIST CÁC DỰ ÁN</h1>
        <hr></hr>
        <div className="row">
            <table className="table table-success table-striped">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>TÊN DỰ ÁN</th>
                  <th>CHỨC NĂNG</th>
                </tr>
               </thead>
            </table>
          </div>
        </div>
    );
}
export default Project;