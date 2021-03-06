import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import AddPet from '../AddPet/AddPet.js'
import PetListItem from '../PetListItem/PetListItem.js'
import { Grid, Paper, Table, TableContainer, TableCell, TableRow, TableHead, TableBody } from '@material-ui/core';


class Pets extends Component {
  state = {
  };

  componentDidMount() {
    this.props.dispatch({ type: 'GET_PETS'})
    this.props.dispatch({ type: 'GET_OWNERS'})
  }

  render() {
    return (
        <div>
            <Grid container justify="center" alignItems="stretch" spacing={2}>
                <AddPet />
                <Grid xs={12} item>
                    <Paper>
                        <TableContainer className="table">
                            <Table stickyHeader >
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Owner</TableCell>
                                        <TableCell>Pet</TableCell>
                                        <TableCell>Breed</TableCell>
                                        <TableCell>Color</TableCell>
                                        <TableCell>Checked In</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.props.store.pets.map((pet) => {
                                        return (
                                            <PetListItem key={pet.id} pet={pet}/>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
  }
}

export default connect(mapStoreToProps)(Pets);