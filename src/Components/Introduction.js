import React,{Component}from 'react';
import styled from 'styled-components';
export default class Introduction extends Component{


    render(){
        return(
           <div>
              <div className="container">
                  <IntroContainer>
                        <div className="description col col-1-2">
                             <h2>Next.js is getting better every day — don’t miss out on all the action.</h2>
                          <p>Join the Next.js newsletter and stay updated on new releases and features, guides, and case studies.
                                </p>
                        
                         </div>
                       <div className="subscription col col-1-2">
                           <form method="POST">
                               <div className="email">
                                   <label for="email-input">
                                       <span className="icon">

                                       <svg width="15" height="15" viewBox="0 0 15 11" aria-label="closed email"><g transform="translate(-598.000000, -418.000000) translate(560.000000, 404.000000) translate(23.000000, 0.000000) translate(15.000000, 13.000000) translate(0.000000, 1.000000)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="0.5" y="0.5" width="14" height="10" rx="2"></rect><path d="M1.175 1.135L7.5 5.5" stroke-linecap="square"></path><path d="M14.04.912L7.5 5.5" stroke-linecap="square"></path></g></svg> 
                                       <div className="input">
                                   <input className="btn email-input" type="text" placeholder="you@domain.com"/></div>
                                   </span>
                                   </label>
                        
                                    <input className="btn submit-btn" type="submit" value="Subscribe"/>
                                            </div>
                         </form>
                       </div>
                   </IntroContainer>
              </div> 
           </div>
        )
    }
}
const IntroContainer=styled.section`
display: flex;
  flex-wrap: wrap;
justify-content :center;

`
