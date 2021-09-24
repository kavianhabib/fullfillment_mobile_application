import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackActions } from '@react-navigation/native';

import Colors from '../constants/Colors';
// import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import PRComponent from '../components/PRComponent';
import CalenderPage from '../screens/CalenderPage';
import AudioPlayer from '../AudioPlayer/AudioPlayer';


function Sermons(props){

    const {navigation, route} = props;

    const [calenderVisiblity, setCalenderVisiblity] = React.useState(false);

    function openCalender(){
        setCalenderVisiblity(true);
    }
    
    function closeCalender(){
        setCalenderVisiblity(false);
    }

    React.useLayoutEffect(() => {
        navigation.setOptions(
            {
                headerRight: () =>(
                    <TouchableOpacity style = {{marginRight: 10}} onPress={openCalender}>
                        <MaterialCommunityIcons  name = 'calendar-check' color = 'white' size = {25}/>
                    </TouchableOpacity>
                ),
                headerStyle: {backgroundColor: Colors.primary},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }
        );
    }, [navigation]);
    return(

            <View style = {styles.screen}>
                <CalenderPage visiblity = {calenderVisiblity} functionCall = {closeCalender}/>

                <AudioPlayer/>
            </View>
//         <ScrollView>


//       <View style = {styles.screen}>
//             <View style = {styles.header}>
//                 <Text style = {styles.headerText}>THE NEED FOR A NEW LEADER</Text>
//                 <View>
//                     <Text style = {styles.verses}>Biblical Text: 1 Samuel 15:36 and 16:1</Text>
//                 </View>
//             </View>
//             <View style = {styles.body}>
//                 <Text style = {styles.bodyText}>The Lord God is sovereign. That means He is supreme, dominant, superior and self-governing. He’s in charge. What He says, goes! The Creator who set the stars in the sky and placed the earth on its axis, who created man in His own image…He is the One who controls everything.

// We like to think of ourselves as being in control. But we are not. For example… • We may choose the career path we want to take, but our success is determined by our God-given gifts and talents. Ask anyone who chose the wrong path. • We may choose a mate, but high divorce rates prove our shortcomings in that arena. • We may choose to buy whatever we want, but the number of people with low credit ratings reveals how poorly we make those decisions.

// When we do the choosing, we make lots of mistakes. The bottom line is that it’s best to let God be your Guide and let Him do the choosing.

// God allowed Saul to be king of Israel. But then God repented. It’s hard to understand God’s need for repentance. And yet that’s just what God did. The Word says “the LORD repented that He had made Saul king over Israel.” That statement requires some explaining. God does not sin, so why should He repent? God makes no mistakes, so why did He appoint Saul to be king in the first place?

// Students of the scriptures know the story of how Saul became king. God never intended for Israel to be led by anyone but Himself. But FREE WILL got in the way. The people of Israel wanted to make their own decision about leadership, and they demanded a king. They wanted to be like the heathen nations who appointed men who were great in their eyes to minister over them. Samuel, the high priest, tried his best to discourage the people from going down this path, but the people of Israel refused to obey Samuel. Instead, they said, “Nay; but we will have a king over us; that we also may be like all the nations; and that our king may judge us, and go out before us, and fight our battles.” (1 Samuel 8:19-20)

// The Word says that Saul was a “goodly” and “choice young man” who stood a head taller than anyone else in Israel (9:2). God acquiesced to Israel’s demands and instructed Samuel to anoint this Benjamite named Saul as the new leader. Sometimes you get just what you asked for.

// What is it that makes us so vulnerable to leaders with wealth, and height, and a good outward appearance? We know that’s no way to choose a leader. The position of leadership is “ordained of God” and should not be taken lightly. And yet Israel isn’t the only one who judged a man by his demeanor. We too often allow ourselves to be duped.

// According to the Word of God, what are the qualities of a good leader?
// 1. Good leaders are humble servants. Luke 22:26 says, “…let the greatest among you become as the youngest, and the leader as one who serves.”
// 2. Good leaders do not tolerate wrongdoing. Proverbs 16:12 says, “It is an abomination to kings to commit wickedness: for the throne is established by righteousness.”
// 3. Good leaders are honest and open. Psalm 43:3 says “…send out Thy light and Thy truth; let them lead me.”
// 4. Good leaders make rules that people will be glad to follow. Psalm 119:35-36 says, “Make me to go in the path of thy commandments; for therein do I delight. Incline my heart unto thy testimonies, and not to covetousness.”
// 5. Good leaders protect their people. Psalm 139:10 says, “Even there shall thy hand lead me, and thy right hand shall hold me.”
// 6. Good leaders are merciful and compassionate. Isaiah 49:10 (NIV) says, “They will neither hunger nor thirst, nor will the desert heat or the sun beat upon them. He who has compassion on them will guide them and lead them beside springs of water.”
// 7. Good leaders do not tempt people to do evil. Jesus tells His chosen leaders to pray saying, “And lead us not into temptation, but deliver us from evil.” (Matthew 6:13)
// 8. Good leaders are knowledgeable and mindful. Jesus says in Matthew 15:14, “…If the blind lead the blind, both shall fall into the ditch.”
// 9. Good leaders lead in peacefulness and godliness. Paul tells Timothy to pray for our leaders and those in authority, “that we may live peaceful and quiet lives in all godliness and holiness.”
// 10. Good leaders speak respectfully. Paul tells Timothy in 2 Timothy 2:16, “But shun profane and vain babblings: for they will increase unto more ungodliness.”
// 11. Good leaders are compassionate and hardworking. Romans 12:8 (NIV) says, “If it is encouraging, let him encourage; if it is contributing to the needs of others, let him give generously; if it is leadership, let him govern diligently; if it is showing mercy, let him do it cheerfully.”
// 12. Good leaders have good advisers around them. Proverbs 11:14 says, “For lack of guidance a nation falls, but many advisers make victory sure.”
// 13. Good leaders serve with love. Isaiah 16:5 says, “In love a throne will be established; in faithfulness a man will sit on it— one from the house of David — one who in judging seeks justice and speeds the cause of righteousness.”
// 14. Good leaders have the will to serve; they’re not greedy for money. 1 Peter 5:2 says, “Be shepherds of God’s flock that is under your care, serving as overseers—not because you must, but because you are willing, as God wants you to be; not greedy for money, but eager to serve;” (NIV)
// 15. Good leaders lead by example. Again, 1 Peter 5:2-3 says, “Shepherd the flock of God that is among you, exercising oversight, not under compulsion, but willingly, as God would have you; not for shameful gain, but eagerly; not domineering over those in your charge, but being examples to the flock.” (ESV)
// 16. Good leaders have skills and integrity. Psalm 78:72 says, “And David shepherded them with integrity of heart; with skillful hands he led them.” (NIV)
// 17. Good leaders are careful, not hasty. Jesus said, “Or suppose a king is about to go to war against another king. Will he not first sit down and consider whether he is able with ten thousand men to oppose the one coming against him with twenty thousand?” (Luke 14:31 (NIV)Z
// 18. Finally, good leaders are a positive role model to everyone. Paul tells Timothy, “Here is a trustworthy saying: If anyone sets his heart on being an overseer, he desires a noble task. Now the overseer must be above reproach, the husband of one wife, temperate, self-controlled, respectable, hospitable, able to teach, not given to drunkenness, not violent but gentle, not quarrelsome, not a lover of money.” (1 Timothy 3:1-3 (NIV)

// That’s eighteen positive leadership qualities. When God measures a leader’s abilities, these are the qualities HE looks for. He knows that it’s easy to be fooled by the outward show. Israel was fooled. And they didn’t get what they wanted, but they sure got what they deserved. Saul became a controlling, untrustworthy, warring mad man, and in the end, his only goal was to stay in power at any cost...even if he had to go against God. He used God as a front for his evil actions.

// How did God let this happen? He didn’t. Israel did. God had already chosen a man after His own heart (13:14) to lead Israel. In the eyes of the Lord, Saul was disqualified. The prophetic word of Jacob had established that the scepter of Israel (or its ‘kingship’) would not depart from Judah, and Judah would eventually produce the Messiah. Saul was a Benjamite and did not meet the basic lineage requirement. But God acquiesced to Israel’s demands. All Samuel could do was anoint Saul and give him authority over God’s people.

// God’s ultimate rejection of Saul did not force Him to a new course of action. He had permitted Israel to have its king of their choice. And now that the character of this king and Israel’s mistake in choosing him were exposed, God used Saul’s disobedience to move forward with His original omniscient plan…a higher plan. God moved forward to plant Israel’s feet on higher ground. Thus, God commanded Samuel to “fill thine horn with oil” and go to the home of Jesse, the Bethlehemite. There God would prove His superiority by raising up a king who would fulfill His divine purpose.

// “The powers that be are ordained of God” (Romans 13:1). It is our duty to obey those in authority over us. So when we choose poor leaders and we end up in a ditch, it is not God’s fault…it is OURS!

// In this 21st Century, the Word of God is STILL our guiding force for choosing leaders. What was good for Saul and David is good for all who desire to lead, be it city, state, or nation. God is calling us to be wise in our choice of leaders.
// We must choose a leader who will follow God, not use Him as a prop.
// We must choose a leader who will love all people; not provoke them to hate one another.
// We must choose a leader who will shun evil; not partake in it.
// We must choose a leader who will work, even on weekends, and especially when those he (or she) serves are suffering.
// We must choose a leader who is generous and does not use our nation’s wealth as a personal piggybank to fill his own coffers and ‘barns’.
// We must choose a leader who values life AFTER birth as much as he claims to value it BEFORE birth.
// We must choose a leader who trusts the God-given wisdom of men, and does not ridicule science; for God made the heavens and earth.
// We must choose a leader who is not a name-caller and a word brawler.
// We must choose a leader who has a history of success, not failure.
// We must choose a leader who admits he is imperfect, and asks God for wisdom.
// We need a leader who PRAYS!

// After Saul…Israel needed a new leader. They welcomed David…a man after God’s own heart. Who will we welcome?</Text>
//             </View>
//         </View>
//         </ScrollView>
  
    );
};

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 5,
        backgroundColor: '#232e42',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header:{

    },
    body:{

    },
    headerText:{
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        fontFamily: 'sans-serif'
    },
    bodyText:{
        color: 'gray',
        fontSize: 14,
    },
    verses:{
        color:'white',
    }
});

export default Sermons;