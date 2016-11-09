import React from 'react';
export default class CommentEntry extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            value: ""
        };
    }
    handleChange(e)
    {
        this.setState({value: e.target.value});
    }

    handleKeyUp(e)
    {
        if (e.key == "Enter") {
            var comment = this.state.value.trim();
            if (comment !== "") {
                // Post comment
                this.props.onPost(this.state.value);
                this.setState({value: ""});
            }
        }
    }

    handlePost(e)
    {
        // Prevent the event from "bubbling" up the DOM tree.
        e.preventDefault();
        // Trim whitespace from beginning + end of entry.
        var statusUpdateText = this.state.value.trim();
        if (statusUpdateText !== "") {
            /* TODO: How do we send the post to the server
       + update the Feed? */
            // Reset status update.

            this.props.onPost(statusUpdateText);
            //this.setState({value: ""});
        }
    }

    render()
    {
        return (
            <div>
                <div className="media-left media-top">
                    PIC
                </div>
                <div className="media-body">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Write a comment..." value={this.state.value} onChange= {(e) => this.handleChange(e)} onKeyUp={(e) => this.handleKeyUp(e)}/>
                        <span className="input-group-btn">
                            <button className="btn btn-default" type="button">
                                <span className="glyphicon glyphicon-camera"></span>
                            </button>
                            <button className="btn btn-default" type="button">
                                ☺
                            </button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
