import { ExpandMore } from "@mui/icons-material";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react";

function FAQs() {
    const [faqs, setFags] = useState([]);
    const [expanded, setExpanded] = useState(null);

    const handleExpand = (index) => {
        setExpanded(expanded === index ? null : index);
    }

    useEffect(() => {
        const data = [
            {
                question: "What is Instant Gaming and how does it work?",
                answer1: "Instant Gaming is an online platform that sells digital video games, offering discounts on a wide range of titles across various gaming platforms. Users can purchase, download and play video games instantly after purchase. The service is popular for its competitive pricing and quick delivery. Instant Gaming is a trusted site for buying games, with secure payment methods and quick delivery, verified by more than 700,000 positive reviews and more than ten years in the industry.",
                answer2: "Instant Gaming works by offering discounted games that can be purchased and delivered digitally. After selecting and purchasing a game, it is sent almost instantly to your account and email. You can then redeem this game on the specific gaming platform (i.e., PC, Steam, Xbox, Playstation or Switch) to download and play it immediately."
            },
            {
                question: "What kind of products can I buy on Instant Gaming?",
                answer1: "On Instant Gaming, you can find a huge selection of products for PC, consoles and more. We have amazing deals on Video Games, DLCs, Gift Card, and Subscriptions for platforms like Steam, EA app, Rockstar, Ubisoft Connect, battle.net, Xbox (Xbox One and Xbox Series X|S), PlayStation (PS4 and PS5), Nintendo Switch, and many more. In addition, we also sell Gift Card for popular services like Tinder, Netflix, Amazon, Spotify, and more. Whether you are looking for the latest game, a gift card, or a subscription, Instant Gaming is the platform for unbeatable discounts."
            },
            {
                question: "Why is Instant Gaming not a marketplace?",
                answer1: "Unlike other sites, we do not allow third-party sellers to offer their games on Instant Gaming. The games we sell come directly from our official suppliers without going through an intermediary."
            },
            {
                question: "Does Instant Gaming also sell Video Games DLC, Gift Card and Subscriptions?",
                answer1: "On Instant Gaming, you can find a wide range of products beyond just games. We offer amazing deals on PlayStation cards, Nintendo eShop cards, Xbox Gift Card, Xbox Game Pass, PlayStation Plus, and Nintendo Subscriptions. In addition, popular Gift Card and Subscriptions for platforms like Steam, battle.net, EA app, Tinder, Netflix, and more can be found on our platform."
            },
            {
                question: "How does Instant Gaming offer such low prices?",
                answer1: "Instant Gaming is a hard discount website created by gamers for gamers that offers unbeatable prices on a wide range of products. By purchasing in large quantities, we secure additional discounts that we pass on to our customers. Our fully digital platform and streamlined operations ensure the best deals on a vast range of products."
            },
            {
                question: "What payment methods can I use to buy on Instant Gaming?",
                answer1: "Instant Gaming supports various payment methods, including credit/debit cards, paysafecard, PayPal and local payment methods like Bizum, Blik and MBWay, ensuring a convenient purchase process for all users."
            },
            {
                question: "Is Instant Gaming a legitimate and trustworthy website?",
                answer1: "Our platform is trusted by millions of gamers worldwide and boasts over 700,000 positive reviews on Trustpilot. With over 10 years of experience in the industry, we have built a solid reputation based on our love and care for our customers."
            },
            {
                question: "How and when can I contact Instant Gaming?",
                answer1: "Our customer support team is available 24/7 during all the year and answer all you questions within an hour, most of the time in few minutes. The support link is available at the bottom of the website."
            }
        ];
        setFags(data);
    }, []);

    return (
        <Box sx={{
            paddingLeft: { lg: 45, md: 15, sm: 3, xs: 2 },
            paddingRight: { lg: 45, md: 15, sm: 3, xs: 2 },
            paddingBottom: {xs: 3, sm: 6, md: 10}
        }}>
            <Typography sx={{
                color: "white",
                fontSize: { lg: 32, sm: 25, xs: 20 },
                fontFamily: "barlow-regular",
                paddingBottom: {xs: 3}
            }}>
                FAQs
            </Typography>
            {faqs.map((item, index) => (
                <Box sx={{
                    paddingBottom: 2
                }}>
                    <Accordion key={index} sx={{
                        bgcolor: "#323232",
                        padding: 1.5,
                        "&:hover": {
                            bgcolor: "#3d3d3d"
                        }
                    }}
                        expanded={expanded === index}
                        onChange={() => handleExpand(index)}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore sx={{color: "white"}} />}
                            sx={{
                                padding: {xs: 0}
                            }}
                        >
                            <Typography sx={{
                                color: "white",
                                fontSize: {xs: 14, sm: 18},
                                fontFamily: "barlow",
                                fontWeight: "bold"
                            }}>
                                {item.question}
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails sx={{
                            padding: {xs: 0}
                        }}>
                            <Typography sx={{
                                color: "#999",
                                fontSize: {xs: 13, sm: 15},
                                fontFamily: "barlow",
                                fontWeight: 700,
                                
                            }}>
                                {item.answer1}
                            </Typography>

                            <Typography sx={{
                                color: "#999",
                                fontSize: {xs: 13, sm: 15},
                                fontFamily: "barlow",
                                fontWeight: 700,
                                paddingTop: {xs: 2, sm: 3},
                                display: item.answer2 ? "flex" : "none",
                            }}>
                                {item.answer2}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </Box>
            ))}
        </Box>
    )
}

export default FAQs;