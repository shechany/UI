import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export class Upload extends Component {

    render() {
        return (
            <div class="upload-box">
<div className="custom-file">
            <input type="file" className="custom-file-input" id="customFile"/>
            <label className="custom-file-label" for="customFile">Choose file</label>
            <br/><br/>
            <input type="submit" className="buttons btn" value="Upload"/>
          </div>
            </div>
            
            
                );
            }
}

export class View extends Component {

    render() {
        return (
            <div class="status-box">
                <table width="100%" className="stats">
                  
                    <tr>
                   <td> Pic</td>
                        <td>Followers:</td>
                        <td>Following:</td>
                    </tr>
                    <tr>
                        <td>Bio:</td>
                        <td></td>
                    </tr>
                 
                </table>
            </div>
            
            
                );
            }
}