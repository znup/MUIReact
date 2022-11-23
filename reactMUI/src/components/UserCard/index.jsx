import { CardMedia, Grid } from '@mui/material';

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <CardMedia component="img" image={avatar_url} alt="avatar git" />
      </Grid>
      <Grid item xs={9}></Grid>
    </Grid>
  );
};

export default UserCard;
