export { Layout };

import React, { StrictMode } from 'react';

function Layout({ children }) {
  return (
    <StrictMode>
      <div>{children}</div>
    </StrictMode>
  );
}
