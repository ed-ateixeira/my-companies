import { useCallback, useContext, useEffect, useState } from 'react';

import Swal from 'sweetalert2';
import { toast } from 'react-toastify';

import { getCompanies } from '../../api/companies.service';

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@mui/material';

import { GlobalContext } from '../../contexts/Global.context';

import { Dropdown } from '../';
import { ViewCompanyModal } from '../../modals/ViewCompany/ViewCompany';
import { UpdateCompanyModal } from '../../modals/UpdateCompany/UpdateCompany';

export function CompaniesTable({ companies, handleRemoveCompany, handleUpdateCompany }) {
  const { openModal } = useContext(GlobalContext);

  const cellActions = useCallback((company) => [
    {
      label: 'Mais detalhes',
      onClick: () => {
        openModal(<ViewCompanyModal companyId={company.id} />);
      }
    },
    {
      label: 'Editar',
      onClick: () => {
        openModal(<UpdateCompanyModal companyId={company.id} handleUpdateCompany={handleUpdateCompany} />);
      }
    },
    {
      label: 'Excluir',
      onClick: () => {
        Swal.fire({
          title: 'Você tem certeza?',
          text: 'Essa ação não poderá ser revertida.',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Remover',
          cancelButtonText: 'Cancelar',
        }).then(({ isConfirmed }) => {
          if (isConfirmed) {
            handleRemoveCompany(company.id);
          }
        })
      }
    }
  ], [companies]);

  function formatCompanyAddress(address) {
    const { street, number, district, city, state } = address;

    return `${street}, ${number}. ${district}. ${city}/${state}`;
  }

  return (
    <TableContainer sx={{ maxHeight: 500 }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nome</TableCell>
            <TableCell colSpan={4}>Endereço</TableCell>
            <TableCell align='right'></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies && companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell>{('00' + company.id).slice(-3)}</TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell colSpan={4}>
                {formatCompanyAddress(company.address)}
              </TableCell>
              <TableCell align='right'>
                <Dropdown id={company.id} items={cellActions(company)} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}