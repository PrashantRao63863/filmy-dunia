import { Button, Card, CardContent, CardMedia, List, ListItem, makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React from "react";
import ChevronRightRounded from '@material-ui/icons/ChevronRightRounded';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import { useBouncyShadowStyles } from '@mui-treasury/styles/shadow/bouncy';
import { Link, useHistory } from "react-router-dom";
import app_config from "../../config";
import { CrewContext } from "../../providers/crewContext";


const useStyles = makeStyles(() => ({
    root: {
        margin: 'auto',
        boxShadow: 'none',
        borderRadius: 0,
    },
    content: {
        padding: 24,
    },
    cta: {
        marginTop: 24,
        textTransform: 'initial',
    },
    cardImg: {
        height: '10rem'
    }
}));

const ListCrew = () => {

    const crewService = React.useContext(CrewContext);
    const [crewList, setCrewList] = React.useState([])

    const styles = useStyles();
    const mediaStyles = useFourThreeCardMediaStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    const shadowStyles = useBouncyShadowStyles();

    const history = useHistory();

    const url = app_config.api_url + '/';

    React.useEffect(() => {

        crewService.getAll()
            .then(data => {
                setCrewList(data)
                console.log(data);
            });

    }, [])

    const handleHire = (crew) => {
        sessionStorage.setItem('crew', JSON.stringify(crew));
        history.push('/user/rentcrew');
    }

    return (
        <div>
            <h1 className="text-center">List Crews</h1>
            <div className="col-md-10 mx-auto">
                <Card>
                    <CardContent>
                        <div className="row">
                            {
                                crewList.map(crew => (

                                    <div className="col-md-3 mt-5" key={crew._id}>
                                        <Card className={clsx(styles.root, shadowStyles.root)}>
                                            <CardMedia
                                                classes={mediaStyles}
                                                image={
                                                    url + crew.avatar
                                                }
                                            />
                                            <CardContent className={styles.content}>
                                                <TextInfoContent
                                                    classes={textCardContentStyles}
                                                    overline={'March 20, 2019'}
                                                    heading={crew.name}
                                                    body={
                                                        crew.description
                                                    }
                                                />
                                                <div className="col">
                                                    <Button color={'primary'} fullWidth className={styles.cta} onClick={e => handleHire(crew)}>
                                                        Hire Now <ChevronRightRounded />
                                                    </Button>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    </div>
                                ))
                            }
                        </div>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}

export default ListCrew;