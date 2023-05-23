import styled from "styled-components";

export const CompanyInfosContainer = styled.ul`
  border-top: 1px solid #cecece;
  min-width: 550px;
  font-size: 16px;
  padding: 16px 24px;
  margin: 0;

  li > ul {
    margin-top: 12px;
  }

  li {
    list-style: none;

    :not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;