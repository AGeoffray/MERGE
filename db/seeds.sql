
USE Community_Pool;



INSERT INTO users (username, email, password_hash, photo, bio, hasCar)
VALUES ("Alyssa", 'alyssa@gmail.com', 'pass', 'https://i.imgur.com/lCBDASk.jpg', "Hi! My name is Alyssa and I live in the East Bay. I want a commute buddy on days when I go to school in the city. I can drive us! Just looking to spare the air and do my part.", true), 
("Spencer", 'suspencer@gmail.com', 'pass', 'https://i.imgur.com/qsfLaJC.jpg', "My name is Spencer Davis. I live in Lafayette and commute to the city during the week. I'd like a chill person to carpool with! Let me know if that's you.", true), 
("Ryan", 'ryan@gmail.com', 'pass', 'https://i.imgur.com/N11X2q7.jpg', "Hey! I'm Ryan. I drive a really cool Prius. Looking for a someone to ride to Danville with Monday through Friday. I like fries... we can always stop for fries.", true), 
("Asha", 'asha@gmail.com', 'pass', 'https://i.imgur.com/Adv8cbg.jpg', "I'm Asha. I just moved back to the bay and don't know many people. I need a ride to work in Berkeley during the week. Willing to go half on gas! HMU :) can't wait to meet you!!!", false),
("Jessica", 'jessica@gmail.com', 'pass', 'https://i.imgur.com/PVHVyYq.jpg', "Hey guys, my name's Jessica. I live in Pinole and would like to find someone to ride with to Berkeley. Thanks :)", true),
("Walter", 'johnathan@gmail.com', 'pass', 'https://i.imgur.com/Cyl4QFc.jpg', "Hi I'm Walter. I'm new to this site, just looking for a new friend to carpool with.", true),
("John", 'john@gmail.com', 'pass', 'https://i.imgur.com/qvTnpsk.jpg', "Hi!! I'm John Williams. I want to save time and hit that diamond lane in the mornings! Let me know if you want to link up", true),
("Rawski", 'raw@gmail.com', 'pass', 'https://i.imgur.com/q16KRJS.jpg', "Heyy I'm Raynesha. I have a car but I'd like to meet someone who wants to go half on gas! Have a nice day :)", true),
("Tisha", 'tisha@gmail.com', 'pass', "https://i.imgur.com/XJK5YIQ.jpg", "Hi I'm Tisha! Looking for a commute buddy!", true),
('Amaan', 'amaan@gmail.com', 'pass', 'https://i.imgur.com/FD52ZWI.jpg', "Hello I am Amaan! Will you help me save the planet? :)", true),
('Simon', 'simon@gmail.com', 'pass', 'https://i.imgur.com/WHr7V3j.jpg', "Hi guys, I'm Simon. I'm originally from London, now living in SF. I'd like to find a nice commute buddy to cut back on emissions! Please let me know if you have a similar goal", true),
('Abe', 'abe@gmail.com', 'pass', 'https://i.imgur.com/ye35okh.jpg', "Hey ya'll, I'm Abraham! You can call me Abe. I rep Vallejo, need a commute buddy ASAP", false);


INSERT INTO rides (userId, departure, arrival, trip_date, trip_time, notes) VALUES 
(1, 'Oakland - West', 'San Francisco - Downtown/Market/Mission', '2019-04-30', '07:00 am', 'I have a car we can use!' ),
(2, 'Oakland - West', 'San Francisco - Downtown/Market/Mission', '2019-04-30', '07:00 am', 'I need a buddy to commute to SF with' ), (3, 'Pittsburg', 'Berkeley - Rockridge', '2019-04-20', '06:00 pm', 'I need a ride pls'),
(4, 'Pittsburg', 'Berkeley - Rockridge', '2019-04-20', '06:00 pm', "I need a ride because I don't have a car atm. Willing to contribute gas money!"),
(5, 'Pinole', 'Bay Point', '2019-04-1', '06:00 am', 'Anyone else heading to Bay Point on the 1st is welcome to ride with me!'),
(6, 'Martinez', 'San Francisco - International Airport', '2019-05-12', '03:00 am', "Can I ride with someone to the Oakland airport? I'd rather not pay to park my car there while I'm out of town."),
(7, 'Berkeley - North/Downtown', 'Oakland - North', '2019-05-1', '05:00 am', "Starting on the first, I'll be commuting to Oakland daily. Would be great to find someone else to ride with!"),
(8, 'Oakland - East', 'Alameda', '2019-04-30', '10:00 am', 'Anyone tryna ride to Alameda with me?'),
(9, 'Oakland - East', 'Alameda', '2019-04-30', '10:00 am', 'I have work at 10. Does anyone want to throw down on gas?'),
(10, 'San Francisco - Sunset/Golden Gate Park', 'San Francisco - Downtown/Market/Mission', '2019-05-15', '08:30 am', 'I need to go downtown for work. Anyone want to drive with me?'),
(11, 'San Francisco - Castro/Haight/Twin Peaks', 'San Francisco - Downtown/Market/Mission', '2019-05-15', '08:00 am', 'Is anyone heading downtown on the morning of the 15th?'),
(12, 'Vallejo', 'Berkeley - Rockridge', '2019-04-25', '11:00 am', 'Can I ride with someone who is heading to Rockridge?');



INSERT INTO ratings (userId, authorId, rating, review) VALUES 
(1, 2, 5, 'Alyssa was punctual and respectful. She plays the best music! Highly recommend!'), 
(2, 1, 5, 'I commute with Spencer to SF often for school. Thanks to this app our carbon footprints are miniscule!'),
(1, 4, 5, 'This girl gave me a ride to Berkeley, she was really sweet.'),
(4, 3, 4, 'Asha was super nice.'),
(3, 1, 5, "I love riding with Ryan, he's super funny and always punctual!"),
(10, 11, 4, "Amaan was very nice and punctual. I'd recommend him to anyone looking for a consistant commute buddy."),
(11, 10, 4, "Simon is so nice. Will continue to ride with him to school."),
(1, 12, 3, "Ehh I wasn't thrilled with Alyssa's car. She is really sweet but her car is made for ants!! I am too tall to ride with Alyssa."),
(12, 1, 3, "Abe was hella cool but he almost broke my car! Beware if you have a small car like I do. Abe is like a giant... VERY tall."),
(8, 9, 4, "Raw is a really cool girl. Loved spending time with her!"),
(9, 8, 4, "Tisha is soooo sweet. Her driving is questionable, but idc if I die cuz she's amazing!!"),
(4, 1, 4, 'Asha is a total sweetheart!'),
(3, 6, 5, "Ryan is Mr. Speed Racer!! Personally, I like that... get from point A to point B fast. but it's not for everyone. He's very chill and funny. 5 stars!"),
(5, 7, 3, "Jessica hardly said two words to me. The ride was really awkward."),
(7, 5, 1, "John was silent the entire ride. I did not feel comfortable around him."),
(2, 3, 5, "Spencer is hella cool."),
(5, 10, 4, "Jessica was so nice! Kinda quiet but she was very sweet and punctual too."),
(10, 12, 4, "Amaan is my boy! He's always on time and hella funny."),
(11, 12, 4, "Simon has a nice a** car and he's super funny. Loved his accent too! I only rode with him once; Overall good experience."),
(6, 8, 5, "Walter is hella funny! Super cool guy."),
(6, 2, 4, "I gave Walter a ride to the airport once. I was already heading to Oakland, but he offered plenty of gas money. Really chill guy. The only thing is we agreed to meet at 5am and he was not on time... had to wait almost 20 minutes for him to get ready."),
(7, 9, 4, "Johnathan is a very nice man. At first he was quiet but he opened up after a while. We are now good friends."),
(8, 1, 5, "Rawski!!! She's so funny and nice. I'd give more than 5 stars if I could!"),
(9, 4, 4, "Me and Tisha didn't really hit it off but she was still nice and she was on time. I gave her $10 in gas and we went to Berkeley together."),
(9, 11, 5, "Tisha was punctual and sweet. She scared me a few times not paying attention to the road, but we made it to our destination in one piece. That's all that matters, right? ;)"),
(11, 2, 5, "Simon is a sweet dude. His accent is classy as hell lol"),
(12, 8, 5, "I love Abeee! This dude is hella funny!"),
(8, 12, 4, "Raw almost killed us driving lol but she's hella cool. Made me laugh the whole time.");


INSERT INTO cities (city) VALUES ('Alameda'), ('Bay Fair'), ('Bay Point'), ('Berkeley - North/Downtown'),('Berkeley - Rockridge'),('Castro Valley'), ('Concord'), ('Daly City'), ('Danville'), ('Dublin'), ('El Cerrito'), ('Fairfield'), ('Fremont'),('Hayward'),('Hayward - South'),('Lafayette'), ('Marin County'), ('Martinez'),('Napa'), ('Oakland - East'), ('Oakland - West'), ('Oakland - North'), ('Oakland - International Airport'), ('Orinda'), ('Pacheco'),('Pinole'), ('Pittsburg'), ('Pleasant Hill'), ('Redwood City'), ('Richmond'), ('Rodeo'), ('San Francisco - International Airport'), ('San Francisco - Downtown/Market/Mission'), ('San Francisco - Castro/Haight/Twin Peaks'), ("San Francisco - Hunter's Point/Excelsior/Port"),('San Francisco - Ingleside/Lake Merced'),('San Francisco - Sunset/Golden Gate Park'),('San Francisco - Richmond District/Presidio/Pacific Heights/Marina'), ('San Jose'), ('San Leandro'), ('San Mateo'), ('Santa Clara'), ('South San Francisco'), ('Sunnyvale'), ('Union City'), ('Vacaville'), ('Vallejo'), ('Walnut Creek')

