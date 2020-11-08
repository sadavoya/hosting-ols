import React, { Component } from "react";
import "./SiteList.scss";
import { siteData } from "../../siteData";
import Site from "../Site";

export default class SiteList extends Component {
  state = {
    sites: siteData,
  };
  getSiteRows = (sites, rowLength) => {
    const addRow = (row, rows) => [...rows, row];
    let rows = [],
      row = [];

    sites.forEach((site, index) => {
      if (index % rowLength === 0) {
        if (row.length > 0) {
          rows = addRow(row, rows);
        }
        row = [];
      }
      row = [...row, site];
    });
    row.length > 0 && (rows = addRow(row, rows));
    console.log(rows);
    return rows;
  };
  render() {
    const { sites } = this.state;
    const rowLength = 6;
    const siteRows = this.getSiteRows(sites, rowLength);
    const columnDefinitions = "col-lg-2 col-md-6 col-sm-8";
    return (
      <>
        <h3 className="text-capitalize text-center">site list</h3>
        {siteRows.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
              {row.map((site) => {
                return (
                  <div key={site.id} className={columnDefinitions}>
                    <Site site={site} />
                  </div>
                );
              })}
            </div>
          );
        })}
      </>
    );
  }
}
