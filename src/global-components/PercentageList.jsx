import React from "react";

export default function PercentageList({ items, hasModal }) {
   return (
     <ul className="percentage-list">
       {items.map((i) => {
         const label = `Open a modal with more information about ${i.name}`;
         const applyNoMarginClass = hasModal ? "no-margin" : "";
         return (
           <li key={i.name}>
            <span className={`item-name ${applyNoMarginClass}`}>
             {i.name}
            </span>
             <div className={`percentage-and-button`}>
               <div className="percentage-container">
                 <div
                   className="percentage"
                   style={{ width: `${i.percentage}%` }}
                   aria-hidden="true"
                 />
                 <span className="sr-only">Percentage: {i.percentage}%</span>
               </div>
               {hasModal && (
                 <button
                   type="button"
                   className="percentage-button"
                   aria-label={label}
                   aria-expanded="false"
                 >
                   <span aria-hidden="true">?</span>
                   <span className="sr-only">{label}</span>
                 </button>
               )}
             </div>
           </li>
         );
       })}
     </ul>
   );
 }

