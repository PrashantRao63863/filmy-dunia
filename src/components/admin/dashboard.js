import { Button, Card, CardActions, CardContent, makeStyles, Typography } from "@material-ui/core";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../providers/userContext";
import cssClasses from '../cssClasses';
import update from 'immutability-helper';
import { Bar } from 'react-chartjs-2';
import { EquipmentContext } from "../../providers/equipmentContext";



const customStyles = makeStyles(theme => ({
    card: {
        marginTop: '2rem'
    }
}))

const AdminDashboard = props => {

    const baseClasses = cssClasses();
    const customClasses = customStyles();

    const [usersList, setUsersList] = useState([]);
    const [equipmentList, setEquipmentList] = useState([]);
    const [regData, setRegData] = useState({});
    const [equipmentData, setEquipmentData] = useState({});
    const [loaded, setLoaded] = useState({ user: false, equipment: false });

    const useService = useContext(UserContext)
    const equipmentService = useContext(EquipmentContext);

    const fetchUsers = () => {
        return useService.getAllUsers()
            .then(data => {
                console.log(data);
                setUsersList(data);
                return data
            })
    }

    const fetchEquipments = () => {
        return equipmentService.getAll()
            .then(data => {
                console.log(data);
                setEquipmentList(data);
                return data
            })
    }

    useEffect(() => {
        fetchUsers()
            .then(data => {
                console.log(data);
                prepareRegData(data);
            })
        fetchEquipments()
            .then(data => {
                console.log(data);
                prepareEqData(data);
            })
    }, [])

    // drawchart(id, datapoints, title, unit, xlabel) {
    //     var chart = new CanvasJS.Chart(id, {
    //       animationEnabled: true,
    //       theme: 'light2',
    //       title: {
    //         text: title,
    //       },
    //       axisY: {
    //         title: xlabel,
    //         titleFontSize: 24,
    //       },
    //       data: [
    //         {
    //           type: 'column',
    //           yValueFormatString: `#,### ${unit}`,
    //           dataPoints: datapoints,
    //         },
    //       ],
    //     });
    //     chart.render();
    //   }

    const prepareRegData = async users => {
        getDatewiseValues(users, 'created').then(data => {
            console.log(data)
            let reg = {};
            reg['dates'] = data[0];
            reg['values'] = data[1];
            setRegData(reg);
            let load = update(loaded, {
                user: {
                    $set: true
                }
            });

            setLoaded(load);
        });
    }

    const prepareEqData = async users => {
        getDatewiseValues(users, 'created').then(data => {
            console.log(data)
            let reg = {};
            reg['dates'] = data[0];
            reg['values'] = data[1];
            setEquipmentData(reg);
            let load = update(loaded, {
                equipment: {
                    $set: true
                }
            });

            setLoaded(load);
        });
    }


    const getDatewiseValues = async (records, colname) => {
        console.log(records);
        let dates = [];
        let values = [];
        return getUniqueValues(colname, records).then((unique_values) => {
            for (let value of unique_values[1]) {
                console.log(value);
                dates.push(formatDate(new Date(value)));
                values.push(getCount(unique_values[0], value));

            }
            return [dates, values];
        });
    }

    const getUniqueValues = async (col_name, data) => {
        // console.log(col_name+' '+data);
        let values = data.map((ele) => {
            let date = new Date(ele[col_name]).setHours(0, 0, 0, 0);
            // console.log(new Date(date).getTime());
            return new Date(date).getTime();
        });

        let uniquevalues = [];
        for (let value of values) {
            if (!uniquevalues.includes(value)) {
                uniquevalues.push(value);
                // console.log(value);
            }
        }

        return [values, uniquevalues];
    }

    const getCount = (records, item) => {
        let count = 0;
        for (let record of records) {
            if (record == item) {
                count++;
            }
        }

        return count;
    }


    const drawBar = (labels, data, legend) => {

        let options = {
            maintainAspectRatio: false,
        }

        if (loaded.user) {
            return (
                <Bar data={{
                    labels: labels,
                    datasets: [{ label: legend, data: data }]
                }}
                    options={options} />
            )
        }
    }

    const formatDate = (date) => {
        let dd = String(date.getDate()).padStart(2, '0');
        let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = date.getFullYear();

        return mm + '/' + dd + '/' + yyyy;
    }


    return (
        <div className="col-md-11 mx-auto">
            <div className="row">
                <div className="col-md-6">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>
                            {drawBar(regData.dates, regData.values, 'Registrations')}
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-6">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>
                            {drawBar(equipmentData.dates, equipmentData.values, 'Equipments')}
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>
                            <Typography className={baseClasses.title} color="textSecondary" gutterBottom>
                                Word of the Day
                  </Typography>
                            <Typography className={baseClasses.pos} color="textSecondary">
                                adjective
                  </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                    <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
                <div className="col-md-7">
                    <Card className={clsx(baseClasses.card, customClasses.card)}>
                        <CardContent>
                            <Typography className={baseClasses.title} color="textSecondary" gutterBottom>
                                Word of the Day
                  </Typography>
                            <Typography className={baseClasses.pos} color="textSecondary">
                                adjective
                  </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                    <br />
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </Card>
                </div>
            </div>

            <Card className={clsx(baseClasses.card, customClasses.card)}>
                <CardContent className={baseClasses.card.backgroundColor}>
                    <Typography className={baseClasses.title} color="textSecondary" gutterBottom>
                        Word of the Day
                  </Typography>
                    <Typography className={baseClasses.pos} color="textSecondary">
                        adjective
                  </Typography>
                    <Typography variant="body2" component="p">
                        well meaning and kindly.
                    <br />
                        {'"a benevolent smile"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>


        </div>
    )
}

export default AdminDashboard;