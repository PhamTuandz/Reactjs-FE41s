import React from "react";

//React functional component
export default function HeaderRFC() {
  return (
    <div>
      <div className="row">
        <div className="col-xs-1-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Title</h3>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
        <div className="col-xs-1-12">
          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Title</h3>
              <p className="card-text">Text</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
