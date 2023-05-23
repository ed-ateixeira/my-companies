import { useContext, useEffect, useState } from 'react';

import { getCompanies, insertCompany, removeCompany, updateCompany } from '../api/companies.service';

import { Button } from '@mui/material';
import { toast } from 'react-toastify';

import { GlobalContext } from '../contexts/Global.context';

import { CompaniesTable } from '../components';
import { InsertCompanyModal } from '../modals/InsertCompany/InsertCompany';
import { HomeContainer, HomeTitle, TableWrapper } from './Home.style';

export default function () {
  const { openModal } = useContext(GlobalContext);

  const [companies, setCompanies] = useState([]);

  function handleOpenInsertCompanyModal() {
    openModal(<InsertCompanyModal handleInsertCompany={handleInsertCompany} />)
  }

  function handleInsertCompany(company) {
    insertCompany(company).then((res) => {
      const { id, name, address } = res.createdCompany;
      setCompanies((prevCompanies) => [...prevCompanies, { id, name, address }]);

      toast.success('Empresa cadastrada com sucesso!');
    }).catch(() => toast.error('Erro ao cadastrar uma empresa'));

  }

  function handleUpdateCompany(companyId, company) {
    updateCompany(companyId, company).then(({ updatedCompany }) => {
      setCompanies((prevCompanies) => {
        const newCompanies = [...prevCompanies];

        const companyIndex = newCompanies.findIndex((company) => company.id === companyId);

        if (companyIndex > -1) {
          newCompanies[companyIndex] = updatedCompany;
        }

        return newCompanies;
      });

      toast.success('Empresa editada com sucesso!');
    }).catch(() => toast.error('Erro ao editar a empresa'));
  }

  function handleRemoveCompany(companyId) {
    removeCompany(companyId).then((res) => {
      setCompanies((prevCompanies) => {
        const newCompanies = [...prevCompanies];

        const companyIndex = newCompanies.findIndex((company) => company.id === companyId);

        if (companyIndex > -1) {
          newCompanies.splice(companyIndex, 1);
        }

        return newCompanies;
      });

      toast.success('Empresa removida com sucesso!');
    }).catch(() => toast.error('Erro ao remover a empresa'));
  }

  useEffect(() => {
    getCompanies().then((res) => setCompanies(res));
  }, [])

  return (
    <HomeContainer>
      <HomeTitle>My companies</HomeTitle>
      <Button variant='contained' onClick={handleOpenInsertCompanyModal}>Cadastrar empresa</Button>
      <TableWrapper>
        <CompaniesTable
          companies={companies}
          handleRemoveCompany={handleRemoveCompany}
          handleUpdateCompany={handleUpdateCompany}
        />
      </TableWrapper>
    </HomeContainer>
  )
};
