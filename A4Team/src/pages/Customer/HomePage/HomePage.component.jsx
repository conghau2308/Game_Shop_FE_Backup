import { Box } from "@mui/material";
import Trending from "./HomePageDetails/Trending";
import Information from "./HomePageDetails/Information";
import Content from "./HomePageDetails/Content";
import Review from "./HomePageDetails/Review";
import Comment from "./HomePageDetails/Comment";
import Indies from "./HomePageDetails/Indies";
import Categories from "./HomePageDetails/Categories";
import FAQs from "./HomePageDetails/FAQs";
import ActionFooter from "./HomePageDetails/ActionFooter";
import TopBanner from "./HomePageDetails/TopBanner";
import Newss from "./HomePageDetails/News";

function HomePageComponent() {
    return (
        <Box sx={{
            bgcolor: "#272727"
        }}>
            <TopBanner />

            <Trending />

            <Information />

            <Content />

            <Comment />

            <Review />

            <Indies />

            <Newss />

            <Categories />

            <FAQs />

            <ActionFooter />
        </Box>
    )
}

export default HomePageComponent;