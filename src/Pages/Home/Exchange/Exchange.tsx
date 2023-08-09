import { useEffect } from "react";
import * as E from "./ExchageStyles";

const Exchange = () => {
  // const [isActive, SetIsActive] = useEffect(true);
  const menus: string[] = ["물물교환", "재능교환"];

  return (
    <E.Wrapper>
      <E.Memubar>
        {menus.map(menuTap => {
          return (
            <div className="menu">
              <div>{menuTap}</div>
            </div>
            )
        })}
      </E.Memubar>
    </E.Wrapper>
  );
};

export default Exchange;