/* eslint-disable quotes,@typescript-eslint/quotes */
import { type NewsPost } from "./newsHelper";

export const news: NewsPost[] = [
    {
        date: 1708892369000,
        author: "ZYAN",
        title: "O sonho de um marinheiro",
        bannerImage: "../img/news/v0.16.0.png",
        content: `Estamos de volta com novas armas, estruturas e muito mais para os marinheiros conferirem! Duas novas armas poderosas estão disponíveis em lançamentos aéreos dourados, e um novo atirador se juntou às fileiras. Onde você encontrou? Ora, no rebocador do capitão, claro! As calças encharcadas valerão a pena.<br><br>

Vitórias-régias, caixotes de rio, pontes e muito mais estão aparecendo nesta atualização, bem como uma infinidade de mudanças e correções de bugs para tornar sua experiência melhor. Duplas chegarão na próxima atualização, então fique ligado!`,
        longContent: `<h2>Zyan v0.16.0</h2>
<h3>Novas características</h3>
<ul>
  <li>Novas estruturas: rebocadores, controlo de tráfego marítimo, pontes.</li>
  <li>Novas armas: Modelo 89 (um DMR), CZ-600 (um franco-atirador) e PP-19 (um SMG suprimido).</li>
  <li>New crate: river crate.</li>
  <li>New obstacles: lily pads.</li>
  <li>New crate: grenade box. Sometimes spawns in place of boxes in the warehouse.</li>
  <li>Added win and death emotes.</li>
  <li>New skin: Distant Shores.</li>
  <li>Added a loading screen.</li>
</ul>

<h3>Changes</h3>
<ul>
  <li>Scope is now reduced to 1x inside of smoke.</li>
  <li>Added quit button to spectate menu.</li>
  <li>Nerfed HP18.</li>
  <li>Added 12.7mm and Curadell (radio ammo) to ammo crates.</li>
  <li>Made rivers slightly narrower.</li>
  <li>Added a strap to the M1 Garand loot image, to make it easier to tell apart from the Mosin.</li>
  <li>New Curadell loot image.</li>
  <li>Improved mobile home and porta potty footstep hitboxes.</li>
  <li>Removed Fireball and Blueberry Smoothie skins.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Fixed grenades sometimes going to the right on mobile regardless of joystick position.</li>
  <li>Fixed not being able to cycle throwables by clicking/tapping on the slot.</li>
  <li>Fixed aim line not showing up on mobile.</li>
</ul>`
    },
    {
        date: 1705262400000,
        author: "ZYAN",
        title: "Pulling the Pin",
        bannerImage: "../img/news/v0.15.0.png",
        content: `Yank a pin out, cook the 'nade, and toss it to blow your enemy sky high! The throwables update is here and brings a plethora of new features and content the game.<br><br>

First and foremost: throwables. Punch a grenade box, scattered around the map, to find frag and smoke grenades. Frags have a timed fuse and produce a powerful explosion, while smokes can provide cover to hide from enemies.<br><br>

Two new powerful weapons have made it ashore in this update: the Vepr-12 and the Vector. The Vector is incredibly strong, but burns through ammo fast. Similarly, the Vepr-12 will send opponents running, but keep an eye on your 12-gauge ammo reserves.<br><br>

The first new building (in a while!) also makes its debut. The armory is a bastion of strength for the island, and the weapons and density of loot live up to that. Explore the office, bunkhouse, APC, and the vault, which contains powerful loot.<br><br>

There are a bunch more new features to check out, such as a new port layout (including an oil tanker!), mobile home, Viking chests, the seax, maul, and major UI changes. Stay survivn'!`,
        longContent: `<h2>Zyan v0.15.0</h2>
<h3>New features</h3>
<ul>
  <li>**Throwables!** Added frag grenades and smoke grenades. Other throwables, like mines and MIRV equivalents, will be added in a future update.</li>
  <li>**New structures!** Added the armory and mobile home.</li>
  <li>**New guns!** Added the Vector (an SMG), and the Vepr-12 (a full auto shotgun; equivalent to surviv's Saiga-12).</li>
  <li>**Updated port!** The port is now smaller, and a new type of ship, the oil tanker, has a 50% chance of spawning in place of the normal ship.</li>
  <li>**New melees!** Added the maul (a heavy hammer), and the seax (a Viking dagger).</li>
  <li>**New UI layout!** The UI has been overhauled.</li>
  <li>Added river rocks.</li>
  <li>Redesigned 2 skins, and added 6 new ones, 1 of which is airdrop exclusive.</li>
</ul>

<h3>Changes</h3>
<ul>
  <li>Winter mode is over.</li>
  <li>Increased movement speed slightly, to match surviv.</li>
  <li>Increased tick rate.</li>
  <li>The flint stone no longer drops healing items.</li>
  <li>Adjusted melee weapon stats.</li>
  <li>Adjusted obstacle multipliers for explosions.</li>
  <li>Smoke now spawns when airdrops land.</li>
  <li>The fists icon now changes with the equipped skin.</li>
  <li>New airdrop ping sound.</li>
  <li>New dry fire sound.</li>
</ul>`
    },
    {
        date: 1702328915000,
        author: "ZYAN",
        title: "Double Trouble",
        bannerImage: "../img/news/v0.14.0.png",
        content: `The weather grows cold, the trees lose their leaves, and the snowdrifts pile high. But we've got a couple new features to spice up the winter season! The entire map has been reskinned to frosty perfection, with more surprises in store soon! Also, we've added the long-awaited dual-wielding feature for pistols—if one isn't enough, grab another for twice the firepower!<br><br>

Of course, we've made a few changes and fixes, including a circular action timer, reworked airdrops, and a larger map grid. Go warm yourself up with a toasty chicken dinner!`,
        longContent: `<h2>Zyan v0.14.0</h2>
<h3>New features</h3>
<ul>
  <li><strong>Winter mode!</strong> Just a reskin for now. More content coming soon.</li>
  <li><strong>Dual wielding!</strong> You can now dual wield pistols.</li>
  <li>You can now cancel actions on mobile.</li>
  <li>Added 2 emotes.</li>
  <li>Added keybind to toggle UI.</li>
</ul>

<h3>Changes</h3>
<ul>
  <li><strong>Better rivers!</strong> River generation has been improved further. Rivers are now smoother, and loot flows down them.</li>
  <li><strong>Circular action timer!</strong> A circular timer is now displayed when reloading/using healing items.</li>
  <li>Adjusted lobby timings. Players are now prevented from joining earlier on more active servers, and later on less active ones.</li>
  <li>Connected separated building walls.</li>
  <li>Increased map grid size.</li>
  <li>Decreased Model 37 fire and switch delays to 900 ms.</li>
  <li>Switched from howler.js to Pixi sound, which should improve loading times significantly.</li>
  <li>Server performance improvements.</li>
  <li>Improved ship hitbox.</li>
  <li>Improved player count calculation code, which should make player counts more accurate.</li>
  <li>New airdrop killfeed icon.</li>
  <li>New helmet pickup sound.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Fixed airdrops spawning in the gas.</li>
  <li>Fixed airdrop pings not showing up sometimes.</li>
  <li>Fixed picking up skins on mobile.</li>
  <li>Fixed being able to see inside the ship vault without opening the door.</li>
  <li>Fixed generator interact message saying "Open Generator" instead of "Activate Generator."</li>
</ul>`
    },
    {
        date: 1701085392000,
        author: "ZYAN",
        title: "Terminal Velocity",
        bannerImage: "../img/news/v0.13.0.png",
        content: `Expect routine supply shipments from the A.E.G.I.S. aeronautical division, complete with everything you need to win a savory chicken dinner! Or, notify them directly by using a radio to get your own personal airdrop. If you're lucky, you'll get one of the 3 new and very powerful guns!<br><br>

Erosion has worked its magic on the island, and rivers look much cleaner than they ever have before. We've made a whole host of changes and bug fixes, including better mobile layout and building visibility. Get out there, these airdrops are comin' in hot!`,
        longContent: `<h2>Zyan v0.13.0</h2>
<h3>New features</h3>
<ul>
  <li>Airdrops! Two airdrops now spawn every game. They can also be called with radios, which are a rare drop from crates.</li>
  <li>More guns! Added 3 guns, which spawn only in airdrops: the Barrett M95 (a sniper rifle; equivalent to surviv.io's AWM-S), the M1 Garand (a DMR), and the ACR (an assault rifle; equivalent to surviv.io's M4A1-S).</li>
  <li>More skins! Added 3 airdrop exclusive skins, including the Ghillie Suit.</li>
</ul>

<h3>Changes</h3>
<ul>
  <li>Tweaked loot tables. Higher level equipment and powerful weapons are now much rarer.</li>
  <li>Better building visibility! You can now see inside buildings from further away, and through open doors.</li>
  <li>Better river generation! Rivers can now branch, and the ends meet the ocean more cleanly.</li>
  <li>Mobile layout improvements.</li>
  <li>Migrated from Webpack to Vite.</li>
  <li>The Stoner 63 now has a 1 in 100 chance of spawning in the refinery.</li>
  <li>Rebalanced some guns.</li>
  <li>Added unique pickup sounds for helmets, vests, and packs.</li>
  <li>Tweaked kill feed icons.</li>
  <li>New M1895 switch sound.</li>
  <li>Updated MP40 reload sound.</li>
  <li>Obstacles now play only one hit sound at once.</li>
  <li>2 blocks of ammo are now dropped along with guns, instead of 1.</li>
  <li>Increased maximum size of ammo stacks dropped by dead players.</li>
  <li>Disallowed extended ASCII characters in usernames.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Fixed the gas always shrinking to the center of the map.</li>
  <li>Fixed barrel smoke particles not showing.</li>
  <li>Fixed door hitbox issues.</li>
  <li>Fixed used toilets never spawning in the house.</li>
  <li>Fixed "Connection lost" issue when spectating a winning player.</li>
  <li>Fixed spectate options not hiding when fullscreen map is shown.</li>
  <li>Fixed players being promoted to kill leader after death.</li>
</ul>`
    },
    {
        date: 1698602400000,
        author: "ZYAN",
        title: "Trick-or-Tweak",
        bannerImage: "../img/news/v0.12.0.png",
        content: `The island grows dark. The trees begin to turn, the rivers run red, and the full moon rises. A new spooky orange obstacle drops one of two new weapons: a training weapon from A.E.G.I.S. stores, and a very powerful shotgun specially modified by H.A.Z.E.L.'s R&D team.<br><br>

After checking out these frightening additions, enjoy your candy while reading all the bug fixes and QoL changes this update brings. Happy Halloween!`,
        longContent: `<h2>Zyan v0.12.0</h2>
<h3>Changelog</h3>
<ul>
  <li>Halloween mode! Added 2 new guns and a new obstacle. Reskinned trees & blueberry bushes. New menu music.</li>
  <li>Added a new skin and a new emote.</li>
  <li>Added 7 new crosshairs.</li>
  <li>Tweaked gun top downs.</li>
  <li>New reload & switch sounds for Flues & M1895.</li>
  <li>Fixed "Connection lost" issues.</li>
  <li>Fixed "Error joining game" issues.</li>
  <li>Fixed an issue with the camera being stuck in the top left corner when movement smoothing is disabled.</li>
  <li>Fixed issues with the Play Again button.</li>
  <li>Fixed birch and pine trees spawning inside other obstacles.</li>
  <li>Fixed kill leader issues.</li>
  <li>Server performance improvements.</li>
  <li>The AEGIS crate now has a 50% chance to spawn in place of the Tango crate in the ship vault.</li>
  <li>Scopes now drop from the Tango crate.</li>
  <li>Fixed issues with shoot on joystick release.</li>
  <li>Fixed the rules & tutorial button being hidden by default.</li>
  <li>Removed misleading ping counter from server selector.</li>
  <li>Fixed overlapping containers at the port.</li>
  <li>Fixed issues with special characters in usernames.</li>
  <li>Fixed kill feed messages not being colored.</li>
  <li>Fixed movement keys not working to switch spectators.</li>
  <li>Fixed rivers below the port slowing players down.</li>
  <li>Fixed keybind reset button.</li>
  <li>Fixed "Equip Other Gun" keybind not switching to secondary slot with only 1 gun equipped and melee slot selected.</li>
  <li>Fixed minimap rendering issues.</li>
  <li>Fixed container layering issues.</li>
  <li>The inside of the captain's cabin on the ship is now revealed when near the windows.</li>
  <li>Added missing killfeed icons.</li>
  <li>Fixed some missing textures.</li>
  <li>Fixed silent porta potty doors.</li>
  <li>Fixed images on the news page not loading.</li>
  <li>The M1895 now displays bullet casings only on reload. The M1895 and Flues now display multiple casings.</li>
  <li>Removed default keybind for opening the dev console.</li>
</ul>`
    },
    {
        date: 1698001957000,
        author: "ZYAN",
        title: "Making Waves",
        bannerImage: "../img/news/v0.11.0.png",
        content: `The island grows ever busier with the newest structure, the port. Search the warehouses and shipping containers for loot, 'cause they’re packed! Containers can also be found throughout the island. But the most valuable loot is contained in the bow of the massive container ship. A highly prized sniper lies within, but you’ll need to solve a puzzle to get in.<br><br>

If you like swimming, you’re in luck! Rivers now snake through the landscape, and the ocean is now accessible.<br><br>

We've added two new guns to our arsenal: the Flues, a sawn-off double-barrel shotgun, and the M1895, a revolver.<br><br>

In addition, we've made many quality of life changes, including shorter guns, custom crosshairs, and a kill leader mechanic.`,
        longContent: `<h2>Zyan v0.11.0</h2>
<h3>New features & changes</h3>
<ul>
  <li>Rivers & ocean! Rivers have been added. The ocean is now accessible.</li>
  <li>New buildings! Added the port, the largest structure so far. Added shipping containers, which spawn at the port and throughout the map.</li>
  <li>More guns! Added 2 guns: the Flues (a sawn-off double-barrel shotgun, equivalent to surviv's MP220), and the M1895 (a revolver).</li>
  <li>The big house has been replaced by a smaller variant. The big variant will be overhauled and re-added in a future update.</li>
  <li>Shorter guns! Gun world images have been shortened.</li>
  <li>Kill leader! A kill leader mechanic has been added. The player with the most kills, if it's more than 3, is awarded the title of Kill Leader, and their name and kill count appears in the top right.</li>
  <li>3 games can now start at the same time, which should reduce late spawning issues.</li>
  <li>Custom crosshairs! You can now choose between various crosshair styles, and customize the color and outline.</li>
  <li>Mobile improvements!</li>
  <ul>
    <li>The left joystick now controls rotation as well as movement. Rotation is overridden by the right joystick.</li>
      <li>Snipers now shoot when releasing the joystick.</li>
      <li>Added an aim line.</li>
      <li>Doors now open automatically when approaching them.</li>
  </ul>
  <li>The server with the best ping is now selected automatically. Player count and ping is now displayed for each server.</li>
  <li>The North America and Europe servers have been upgraded again.</li>
  <li>The Play Again button now allows you to rejoin the game with 1 click. To return to the menu, click the Menu button.</li>
  <li>Explosive obstacles now emit smoke particles when they're close to destroyed.</li>
  <li>You can now click on players to spectate them, which should make it easier to report teamers.</li>
  <li>Ammo is now split up when dropped from dead players.</li>
  <li>Removed join and leave messages.</li>
  <li>You can now hide under tables.</li>
  <li>Added an option to hide the rules button.</li>
  <li>Added an option to display coordinates.</li>
  <li>Added an option to enable the old menu music.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Fixed full auto guns not continuing to fire when holding the fire button/joystick after reloading.</li>
  <li>Fixed more issues with auto loot pickup on mobile.</li>
  <li>Fixed muzzle flash position.</li>
  <li>Fixed attacking when clicking on the buttons in the pause menu.</li>
  <li>Fixed the action progress bar not hiding when quitting.</li>
  <li>Fixed emotes rendering below certain obstacles.</li>
</ul>`
    },
    {
        date: 1694706686000,
        author: "ZYAN",
        title: "Back with a Bang",
        bannerImage: "../img/news/v0.10.0.png",
        content: `Despite the construction delays, we're back on the island to officially open the newest building: the refinery! Full of plenty of loot, but watch out or the whole place could go ka-boom...<br><br>

We're also happy to announce a large shipment containing 4 new types of guns, including two new DMRs! One gun is Italian, and three are American. Sources indicate the new LMG is particularly potent...<br><br>

Our scouts have fully mapped out the island, including its beaches. We've decided to begin adding name markers to the map to aid in navigation. You're welcome!`,
        longContent: `<h2>Zyan v0.10.0</h2>

<h3>New features & changes</h3>
<ul>
  <li>New building! Added the refinery, the largest structure yet!</li>
  <li>More guns! Added 4 guns: the Stoner 63 (a LMG), SR-25 (a DMR), ARX-160 (an assault rifle), and Mini-14 (a DMR).</li>
  <li>Rewrite! The game has been rewritten to use Pixi.js (a different rendering engine), and a custom physics engine, which should improve performance a lot.</li>
  <li>Better bullets! Bullets now reflect off of metal surfaces. Bullet collisions are now calculated client-side, making them more accurate.</li>
  <li>Beaches & ocean! The island is now surrounded by beaches and ocean.</li>
  <li>More & better particles! Players now emit particles when using healing items. Added bullet shell particles and muzzle flash. Obstacle hit particles now show in the correct locations.</li>
  <li>Better sounds! Sounds now play more reliably. Sound falloff has been added, meaning further away sounds are quieter, and a subtle stereo effect has been added.</li>
  <li>Place names! There are now named places on the map, like in surviv.io.</li>
  <li>Fixed an issue causing the game to freeze for a few seconds every round.</li>
  <li>New servers! The main, North America server has been upgraded from 2 cores and 2 GB RAM to 4 cores and 4 GB RAM. The Europe server has been upgraded to 4 cores and 8 GB RAM.</li>
  <li>Added 3 new skins and 1 emote.</li>
  <li>Made the warehouse and porta potty entrances more obvious. Added holes to the house roof.</li>
  <li>Your rank is now shown on the game over screen.</li>
  <li>Better hitboxes! Hitboxes and viewports have been fixed and adjusted.</li>
  <li>New pine tree texture.</li>
  <li>Added unique pickup sounds for healing items and scopes.</li>
  <li>Fixed issues with auto loot pickup on mobile.</li>
  <li>Fixed the force required to activate the right joystick not changing with joystick size.</li>
  <li>Added an option to loop when switching scopes, disabled by default.</li>
</ul>

Special thanks to Leia and platonthek. This update wouldn't have been possible without them.`
    },
    {
        date: 1690748181000,
        author: "ZYAN",
        title: "Behind Closed Doors",
        bannerImage: "../img/news/v0.9.0.png",
        content: `We at ZYAN are proud to announce the construction of 3 new structures on the island. The cozy house is a great place to spend the night…although you’ll want to leave before the gas catches you. The warehouse, though abandoned, still contains some unopened shipments, just waiting to be looted. Lastly, if you need to do some “business”, there are plenty of porta potties around for that purpose.<br><br>

There are also two new Austrian arrivals to the island. Like the Micro Uzi but want something that packs more of a punch? The Steyr AUG might be for you. If you prefer a challenge, grab the all-new full auto pistol, the CZ-75A.<br><br>

Surians can now customize their skins, and express themselves with emotes too! Everything is unlocked until accounts are added.`,
        longContent: `<h2>Zyan v0.9.0</h2>

<h3>New features & changes</h3>
<ul>
  <li>Buildings! Added 3 buildings: the house, the warehouse, and the porta potty.</li>
  <li>Skins & emotes! Added 22 skins and 59 emotes. All skins and emotes will be unlocked until accounts are added.</li>
  <li>More guns! Added 2 guns: the CZ-75A (a full auto pistol), and the AUG (an assault rifle). Also, the G19 is now semi-automatic.</li>
  <li>Tweaked gun and scope stats.</li>
  <li>Spectating! You can now spectate other players after you die. Also, a report system has been added, which will allow us to ban hackers.</li>
  <li>Games are now longer.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Fixed an issue with the game getting stuck on "Connecting..." on older iOS devices.</li>
  <li>Fixed an issue causing the server to crash occasionally.</li>
</ul>`
    },
    {
        date: 1689622834000,
        author: "ZYAN",
        title: "Untrodden Lands",
        content: `H.A.Z.E.L. has made various improvements to weapons systems to refine them further, and a small shipment of antiquated arms has been received from Flint Industries. Scouts have explored more of the island. We've mapped out the gas release points, allowing us to predict the gas's movement accurately. Additionally, new AR software updates have been pushed out to ensure battle readiness.`,
        longContent: `<h2>Zyan v0.8.0</h2>

<h3>New features & changes</h3>
<ul>
  <li>Bigger map! The map is now bigger, and games are longer.</li>
  <li>More guns! Added 2 guns: the MP40 (an SMG), and the VSS (a DMR).</li>
  <li>Gun improvements! Guns now slow you down when holding, and spread is higher when moving. Gun icons have been simplified.</li>
  <li>Gas improvements! A white circle now appears on the map, showing where the gas will shrink to. Messages now appear when the gas is advancing, and gas death messages have been added.</li>
  <li>Lots of tweaks to gun stats and loot tables.</li>
  <li>New menu music!</li>
  <li>New obstacle! Added the blueberry bush.</li>
  <li>The secondary ammo counter now displays the total ammo in the inventory, instead of the gun clip size.</li>
  <li>The gold rock is no longer shown on the map.</li>
</ul>`
    },
    {
        date: 1688950260000,
        author: "ZYAN",
        title: "Geared Up",
        content: `A long-awaited shipment, containing helmets, vests, backpacks, and scopes, has finally arrived on the island! Pack in extra ammo with backpacks, protect yourself with helmets and vests, and get the jump on your enemy with scopes. Unfortunately, due to supply shortages, guns have become more scarce.`,
        longContent: `<h2>Zyan v0.7.0</h2>

<h3>New features & changes</h3>
<ul>
  <li>Equipment! Added helmets, vests, backpacks, and scopes.</li>
  <li>Replaced the 940 Pro with the HP18, a functionally identical gun which should be easier to distinguish from other shotguns.</li>
  <li>Added client-side prediction, which should make the game feel a lot more responsive. It can be turned off in settings.</li>
</ul>`
    },
    {
        date: 1688328459000,
        author: "ZYAN",
        title: "Tablets & Tweaks",
        content: `A new adrenaline item, tablets, can now be found! Tablets, along with all other healing items, can now be picked up and carried—but they no longer work instantly. Check out the Featured YouTubr and Streamr on the redesigned title screen! The kill feed and settings menu have also been redesigned. A golden object may drop a very powerful weapon...`,
        longContent: `<h2>Zyan v0.6.0</h2>

<h3>New features & changes</h3>
<ul>
  <li>Better healing items! Healing items can now be picked up, and take time to use. Added tablets, which heal 50% adrenaline.</li>
  <li>Better kill feed! Redesigned the kill feed. It now shows weapon icons instead of names.</li>
  <li>South America server! A 4th server, hosted in São Paulo, Brazil, is now available. To select it, click on the dropdown above the play button.</li>
  <li>Mobile improvements! Added auto loot pickup, and improved the UI.</li>
  <li>Better settings! The settings menu has been redesigned. Added options to change minimap and joystick transparency, and joystick size.</li>
  <li>The Lewis gun and Tango 51 are now more common. The MCX Spear is now less common.</li>
  <li>The Tango 51 now has a chance to drop from gold rocks.</li>
  <li>Buffed the 940 Pro.</li>
  <li>The gas has been nerfed slightly, and now shrinks completely.</li>
  <li>Added a background to the menu.</li>
  <li>Added Featured YouTubr and Streamr to the menu.</li>
  <li>Optimized minimap texture generation, which should improve load times on mobile.</li>
  <li>Minor tweaks to textures and sound effects.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Fixed a bug causing reloading to break when picking up a gun.</li>
  <li>Fixed blood particles not appearing.</li>
  <li>Blood particles no longer appear when the player is damaged by gas.</li>
  <li>Fixed opaque obstacles on the minimap.</li>
</ul>`
    },
    {
        date: 1687625334000,
        author: "ZYAN",
        title: "Locked & Loaded",
        bannerImage: "../img/news/v0.5.0.png",
        content: `The newest supply shipment to the island has arrived, along with a slew of new weapons! Blast enemies all day long with the 47 round pan on the Lewis gun, or test your marksmanship with the Tango 51. Prefer hand-to-hand combat? The K-bar or the baseball bat may be for you. A glint of gold may yield a fruitful surprise...`,
        longContent: `<h2>Zyan v0.5.0</h2>

<h3>New features</h3>
<ul>
    <li>Ammo and reloading! Guns now require ammo and need to be reloaded.</li>
    <li>Melee weapons! Added 2 melee weapons: the K-bar (a knife), and the baseball bat.</li>
    <li>More guns! Added 6 guns: the Lewis Gun (an LMG), MCX Spear (an assault rifle), Micro Uzi (an SMG), Tango 51 (a sniper), 940 Pro (a shotgun), and M16A4 (a burst fire assault rifle).</li>
    <li>New crates! Added the AEGIS and Flint crates, which drop better loot than regular crates. Also added gauze, cola, and melee crates.</li>
    <li>New obstacles! Added the oil tank, gold rock, and birch tree. The oil tank is an indestructible obstacle that makes for good cover. The gold rock drops a Mosin-Nagant; only one spawns per map.</li>
    <li>More obstacle variations! Added mossy and cracked variants of the rock.</li>
</ul>`
    },
    {
        date: 1687026036000,
        author: "Dr. Félix Sterling",
        title: "Suprimentos recebidos",
        bannerImage: "../img/news/v0.4.0.png",
        content: `Recebemos as novas armas e suprimentos do Sr. Flint. Nas caixas estavam todas as quatro armas prometidas: a Mosin-Nagant, a Ithaca Modelo 37, a SAF-200 e a Glock 19. Estas deveriam ajudar-nos dramaticamente, pois precisávamos muito de poder de fogo adicional e variado. Além disso, os novos itens médicos, gazes, refrigerantes e kits médicos, permitirão um melhor tratamento das lesões. No entanto, eles não eram do tipo portátil que solicitamos e esperamos resolver isso em breve.`,
        longContent: `<h2>Zyan v0.4.0</h2>

<h3>Novos recursos e mudanças</h3>
<ul>
  <li>Saque! As caixas agora deixam armas e itens de cura. Os jogadores não aparecem mais com armas.</li>
  <li>Mais armas! Adicionadas 4 armas: a Mosin-Nagant (um franco-atirador), o Modelo 37 (uma espingarda de bomba), SAF-200 (uma SMG de explosão) e G19 (uma pistola totalmente automática). O recuo também foi adicionado, o que significa que as armas diminuem a velocidade ao disparar.</li>
  <li>Seletor de servidor! Agora você pode escolher entre três servidores: um na América do Norte (Detroit, Michigan), um na Europa (Londres, Inglaterra) e um na Ásia (Osaka, Japão).</li>
  <li>Adicionado um atalho de teclado "Equipar outra arma" (o padrão é barra de espaço).</li>
  <li>Adicionado um atalho de teclado "Trocar slots de arma" (o padrão é T).</li>
  <li>Adicionado um atalho de teclado para alternar o minimapa (o padrão é N).</li>
  <li>Adicionada uma opção para desativar os controles móveis, para quem joga em um dispositivo móvel com mouse e teclado.</li>
  <li>Aumento da taxa de disparo do M3K; dano diminuído.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Corrigido um bug que permitia aos jogadores se moverem duas vezes mais rápido ao usar os controles móveis e as teclas de movimento ao mesmo tempo.</li>
  <li>Corrigido um bug que fazia com que os punhos dos jogadores ficassem presos em posições incorretas.</li>
  <li>Corrigimos os sons de troca de arma para todos os jogadores, não apenas para o jogador ativo.</li>
</ul>`
    },
    {
        date: 1685914769000,
        author: "Dr. Petrova",
        title: "Estado duplo",
        bannerImage: "../img/news/v0.3.0.png",
        content: `Um misterioso gás laranja está sendo relatado ao redor da ilha. Coletamos uma amostra e conseguimos convertê-la em sólido a -9,3°C, mas descobrimos que ela era muito tóxica. Voce foi avisado! Em outras notícias, se você for o último na ilha, receberá seu próprio jantar de frango, cortesia de ZYAN, a refeição perfeita para desfrutar de sua vitória!`,
        longContent: `<h2>Zyan v0.3.0</h2>
<h3>Novas características</h3>
<ul>
  <li>Gás! O gás tóxico agora preenche lentamente o mapa conforme o jogo avança.</li>
  <li>Jantares de frango! Se você for o último homem de pé, agora poderá desfrutar de um delicioso jantar de frango.</li>
  <li>Minimapa! Agora existe um minimapa no canto superior esquerdo. Para expandi-lo, pressione G ou M. No celular, basta tocar no mapa.</li>
  <li>Controles móveis! Zyan agora pode ser jogado em dispositivos móveis. Para usar os controles, basta pressionar e arrastar. O joystick esquerdo (metade esquerda da tela) controla o movimento, e o joystick direito (metade direita da tela) controla a mira e o tiro.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>As balas agora aparecem no cano da arma em vez de no corpo do jogador.</li>
  <li>Corrigido um bug visual que fazia com que as balas fossem na direção errada perto das bordas do mapa.</li>
  <li>Corrigido um bug que fazia com que a arma errada continuasse disparando durante a troca rápida.</li>
  <li>Corrigido um bug que permitia aos jogadores ver mais do mapa diminuindo o zoom.</li>
</ul>`
    },
    {
        date: 1685317752000,
        author: "hasanger",
        title: "Armas divertidas",
        bannerImage: "../img/news/v0.2.0.png",
        content: `A atualização desta semana apresenta armas, caixas de saúde e atalhos de teclado! Existem apenas 2 armas por enquanto: a AK-47 e a M3K. Mais será adicionado em breve.<br>Se você estiver tendo problemas com texturas, tente <a href="https://its.uiowa.edu/support/article/719">limpando seu cache.</a>`,
        longContent: `<h2>Zyan v0.2.0</h2>
<h3>Novas características</h3>
<ul>
    <li>Armas! Adicionados o AK-47 e o M3K. Mais armas serão adicionadas em breve, incluindo a Mosin-Nagant.</li>
    <li>Caixas de saúde! Essas caixas restauram sua saúde quando quebradas. Eles são uma adição temporária e serão removidos assim que os itens de cura adequados forem adicionados.</li>
    <li>Atalhos de teclado! Agora você pode remapear chaves. Para editar os atalhos de teclado, clique no ícone de engrenagem no canto inferior direito ou, no jogo, pressione Escape e clique em Configurações. Em seguida, clique na guia Atalhos de teclado.</li>
</ul>

<h3>Bug fixes</h3>
<ul>
  <li>Corrigido um bug visual que fazia com que os punhos dos jogadores ficassem presos na posição de soco.</li>
</ul>`
    },
    {
        date: 1684625426000,
        author: "hasanger",
        title: "Estamos de volta, amor",
        bannerImage: "../img/news/v0.1.0.png",
        content: `Kongregate pode ter fechado o Surviv Reloaded, mas isso não vai me impedir! Hoje, estou lançando a primeira versão beta de Zyan, um jogo Battle Royale 2D de código aberto inspirado em pubg e fortnite.
Para relatar um bug ou sugerir algo, <a href="https://discord.com/channels/774365668778311680/774365668778311689" target="_blank" rel="noopener noreferrer">entre no servidor Discord</a>. Se você tiver alguma dúvida, confira o FAQ em <a href="https://zyanroyale.com/news" target="_blank" rel="noopener noreferrer">a página de notícias</a>.`,
        longContent: `<h2>FAQ</h2>
<h3>O que é Zyan Royale?</h3>
<p>Zyan é um novo jogo Battle Royale 2D de código aberto inspirado em surviv.io. Depois que Surviv Reloaded, meu primeiro projeto de revival do surviv.io, recebeu DMCA da Kongregate, a equipe do Surviv Reloaded começou a trabalhar em um novo jogo, Zyan. Zyan é semelhante ao pubg e fornite, mas foi construído do zero com recursos e código 100% originais.</p>

<h3>Por que o [recurso] ainda não está no jogo? Quando o [recurso] será adicionado?</h3>
<p>A versão beta inicial do Zyan é muito básica. Recursos essenciais como armas, saques e edifícios serão adicionados nas próximas semanas. Para mais informações, confira o canal #roadmap no Discord.</p>

<h3>Eu não consigo me mover.</h3>
<p>Como o jogo está na versão beta inicial, ainda não adicionamos controles móveis. Se você estiver em um dispositivo móvel, como um telefone ou tablet, ainda não há como se mover.</p>

<h3>Meu jogo está lento.</h3>
<p>O servidor está hospedado nos Estados Unidos. Se você mora longe dos EUA ou tem Internet lenta, é esperado atraso. No futuro, os servidores serão hospedados em outros países.</p>

<h3>Eu encontrei um bug.</h3>
<p>Para relatar um bug ou sugerir um recurso, entre no Discord. Poste bugs no canal #bugs e sugestões em #suggestions. Antes de relatar um bug, verifique se alguém já não o relatou.</p>`
    }
];
