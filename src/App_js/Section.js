import React, { Component } from 'react';
import '../App_css/Section.css';

class Section extends Component {
    render() {
        return (
            <div className="section">
                <div className="item">
                    <div>
                        <img src={require('../images/w512h5121380476932megaphone.png')} alt=""/>
                        <hr/>
                    </div>
                    <h4>What is Famo.us?</h4>
                    <p>Contrary to popular belief, Lorem Ipsum is not simply random text. 
                        It has roots in a piece of classical Latin literature from 45 BC,
                        making it over 2000 years old. Richard McClintock, a Latin professor
                        at Hampden-Sydney College in Virginia, looked up one of the more 
                        obscure Latin words, consectetur.</p>
                </div>
                <div className="item">
                    <div>
                        <img src={require('../images/no-translate-detected_318-538.jpg')} alt=""/>
                        <hr/>
                    </div>
                    <h4>Build your career</h4>
                    <p>But I must explain to you how all this mistaken idea of denouncing
                        pleasure and praising pain was born and I will give you a complete
                        account of the system, and expound the actual teachings of the great
                        explorer of the truth, the master-builder of human happiness. No one 
                        rejects, dislikes, or avoids pleasure itself.</p>
                </div>
                <div className="item">
                    <div>
                        <img src={require('../images/knowledge-512.png')} alt=""/>
                        <hr/>
                    </div>
                    <h4>Never stop learning</h4>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium voluptatum deleniti atque corrupti quos dolores et quas 
                        molestias excepturi sint occaecati cupiditate non provident, similique
                        sunt in culpa qui officia deserunt mollitia animi, id est laborum et 
                        dolorum fuga.</p>
                </div>
            </div>
        );
    }
}

export default Section;