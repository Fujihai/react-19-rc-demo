import React, { forwardRef } from "react";

// const ForwardRefExample = forwardRef((props, ref) => {
//   return (
//     <div>
//       <form action="">
//         <input type="text" ref={ref} placeholder="props.label"/>
//       </form>
//     </div>
//   );
// });

const ForwardRefExample = (props) => {
    return (
      <div>
        <form action="">
          <input type="text" ref={props.ref} placeholder="props.label"/>
        </form>
      </div>
    );
  };

ForwardRefExample.displayName = "ForwardRefExample";

export default ForwardRefExample;
