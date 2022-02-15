export const NavBtn = (props) =>{
        return (
          <button onClick={props.onClick}>
            {props.children}
          </button>
        );
    }

export default NavBtn;