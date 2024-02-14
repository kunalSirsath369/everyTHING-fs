import { Avatar, Box, Grid, Rating } from "@mui/material"


const ProductReviewCard = () => {
  return (
    <div>
        <Grid container spacing={2} gap={3}>
<Grid item xs={1}>
    <Box >
        <Avatar className="text-white" sx={{ bgcolor: "indigo", width: 30, height: 30 }}>R</Avatar>

    </Box>

</Grid>
<Grid item xs={9}>
<div className="space-y-2">
<p className="font-semibold text-lg ">Ram</p>
<p className="opacity-70 ">April 5,2023</p>


</div>
<Rating name="half-rating" defaultValue={4.5} precision={0.5} readOnly />
<p >Nice product, i love this shirt</p>
</Grid>
        </Grid>
    </div>
  )
}

export default ProductReviewCard