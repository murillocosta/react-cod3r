/* eslint-disable import/no-anonymous-default-export */

import React, { cloneElement } from 'react';

// Apenas um elemento filho:
// export default props => {
//   return <div>{cloneElement(props.children, { ...props })}</div>;
// };

//Vários elementos filhos:
// export default props => {
//   return (
//     <div>
//       {React.Children.map(props.children, child =>
//         cloneElement(child, { ...props }),
//       )}
//     </div>
//   );
// };

// Alternativa:
export default props => {
  return (
    <div>
      {props.children.map((child, index) =>
        cloneElement(child, { ...props, key: index }),
      )}
    </div>
  );
};
