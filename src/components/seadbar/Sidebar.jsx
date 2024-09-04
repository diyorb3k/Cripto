import React, { useState, useEffect } from 'react';
import '../../Scss/Sidebar.scss'; 

function Sidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto'; 
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isSidebarOpen]);

  return (
    <div className="Sidebar">
      <button className="open-sidebar-button" onClick={toggleSidebar}>
      WATCH LIST
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <div className='btn_item'>
        <button className="close-sidebar-button" onClick={toggleSidebar}>
          Close
        </button> 
        </div>
        <div className="sidebar-content">
          <h2>Sidebar Content</h2>
          <p>This is the content inside the sidebar.</p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius accusamus voluptas pariatur eveniet nam officiis cum, praesentium nemo minima dicta maiores? Quia fuga harum sint possimus odio quaerat quod ipsam omnis aspernatur ipsa temporibus amet sequi voluptate accusantium culpa, repellendus aperiam deserunt consequatur aliquam? Itaque necessitatibus tempora perspiciatis quibusdam eaque ducimus odit animi laborum est sunt. Tenetur veniam excepturi ut quod quas mollitia est cumque, dicta ratione impedit laudantium. Sit, vitae omnis illum quis pariatur sed natus itaque veritatis laboriosam eligendi. Ullam, quisquam at nisi, sed odit rerum ducimus ipsum inventore incidunt est totam perferendis. Dignissimos, magni. Quae impedit esse voluptatum illo adipisci, magnam cumque, vitae quam aliquid blanditiis molestiae commodi laboriosam ipsam error? Dicta ea dolore mollitia id? Nam dignissimos repudiandae eius voluptas harum, dolor officia laboriosam quo quasi maiores autem. Alias sequi sed sit ab. Reprehenderit aliquam vel velit voluptates molestiae! Sed voluptatum ipsum provident rerum placeat doloribus iusto animi adipisci ut quaerat tempora illum blanditiis odit repudiandae, hic dicta earum repellat atque eveniet? Maiores obcaecati unde ab, ratione molestias, aliquid sapiente numquam officiis veritatis magni aperiam voluptate consequuntur id optio dolores odit amet doloribus mollitia, officia modi? Repellat perspiciatis ullam exercitationem doloremque molestias laboriosam recusandae quae cupiditate debitis soluta assumenda minus eaque facere voluptatum repudiandae nisi itaque sed, ad quasi in est sequi! Debitis cumque error odio autem voluptas tenetur reprehenderit aliquid maxime voluptates officiis hic quidem quia qui fuga obcaecati, quos magnam. Vel, consectetur molestiae iusto nesciunt aspernatur odit culpa voluptatibus rerum labore placeat officiis tenetur consequatur id? Esse atque maiores voluptate quam reprehenderit doloremque ipsam dignissimos labore optio vero facilis eos tempora quo nobis eaque, sapiente ipsa iure porro cum officiis consequatur. Iste ipsum libero necessitatibus ratione voluptatibus nesciunt natus. Quam et, nam magni quia, corrupti ducimus fugiat, aliquam enim natus similique dolores reprehenderit molestiae. Culpa quibusdam porro, nemo laborum itaque ullam nam ea ipsa dolorem asperiores eaque natus accusantium voluptatem quod a iure dolorum, assumenda nesciunt odio totam eligendi voluptas! Ab corrupti cupiditate, repellendus repudiandae porro voluptates dicta ipsa quis, vero quod magni enim ipsam quia nobis placeat rem soluta labore atque consequuntur odio neque maiores deleniti animi aliquid! Numquam velit eius fuga inventore pariatur qui possimus placeat dolorum animi alias optio, impedit quos consectetur. Non aperiam, dolorum ad est, quaerat aliquid nesciunt, quo voluptate numquam porro placeat magni! Ullam quam dolorem expedita ad ducimus fugiat mollitia, molestias voluptatem unde quae at necessitatibus voluptatum esse vel cupiditate tempore similique perferendis tenetur? Accusantium nihil exercitationem maxime porro amet et! Dolor molestias repellendus nam, cupiditate nesciunt odio inventore eos pariatur voluptatem illo, omnis molestiae quidem labore harum ratione voluptatibus maiores laudantium at quo deserunt? Nihil rerum eos quisquam aperiam sapiente perspiciatis officiis dolores hic quibusdam, odit alias porro itaque ea. Blanditiis ut ipsam vero, culpa commodi vitae iste maxime harum tempore. Blanditiis cum suscipit esse veniam molestias. Distinctio, molestiae earum architecto nihil voluptatum ipsum? Veritatis nam mollitia aspernatur enim neque, dolorem deleniti assumenda sunt facilis eius, consequatur voluptatibus quidem dolor doloribus eveniet nihil ut accusantium molestias possimus, ratione ea sint! Architecto odio fugit ipsam, quaerat maxime accusantium, officia asperiores blanditiis quidem quasi non minus at delectus corrupti. Dolore aut facere necessitatibus id consectetur distinctio nesciunt? Fuga omnis repellendus cumque totam dignissimos repellat illum ut, molestiae quas vitae vero veniam nihil cupiditate ipsum quae eum. Officia, fuga distinctio. Consectetur exercitationem assumenda, ex dolores quidem quae nihil tempora quam, ipsam atque sapiente aperiam perspiciatis, accusamus reiciendis unde dignissimos rerum dicta non dolorem harum? Officiis autem praesentium tenetur quae? Dolore veritatis officiis ipsa est, error cupiditate amet, quisquam tenetur nemo fugiat labore molestias corporis minima eos quaerat unde, aperiam culpa? Nisi doloremque, suscipit totam numquam laboriosam mollitia officia maiores eveniet eum aperiam qui quisquam placeat possimus consequatur voluptatem asperiores cum pariatur id! Velit in quis cumque eos blanditiis dolore quasi porro tenetur delectus itaque, nostrum, animi ab dolores, sint quod sunt voluptas aspernatur nisi error nihil ad minus ipsam quidem eius. Consectetur praesentium nam voluptate in, culpa quae deleniti consequuntur voluptates dolorem placeat blanditiis rem! Earum unde eaque ullam, sapiente laborum, distinctio numquam illum, ducimus saepe aut nobis molestiae cum nesciunt similique voluptatibus recusandae aspernatur voluptas hic dolorem vitae delectus? Voluptate veniam qui atque expedita cumque officiis in quidem explicabo voluptatem, consequuntur tenetur porro velit hic nihil accusamus non maiores aliquam excepturi, sunt quos autem. Iste impedit, mollitia dolorem, in quasi corporis magnam nemo ullam eligendi autem aliquid. Tempora numquam nesciunt nulla accusamus possimus, ex enim reiciendis tempore sunt maxime vel rem doloribus adipisci quia autem nisi recusandae, excepturi eligendi unde praesentium error quis veritatis impedit! Sapiente accusantium tempore ratione velit quia iusto commodi exercitationem cum error. Quidem quam aspernatur non, eos quis debitis sequi, numquam repellendus dolorem cupiditate tempore placeat inventore temporibus consequuntur ipsam, perspiciatis impedit deserunt error laboriosam sunt? Nesciunt, consequuntur laboriosam possimus aliquam ea quas ab sint eius libero minima rem sunt quis odit eligendi. Laborum praesentium ullam eaque enim sint nam cumque, explicabo veniam consectetur quod ut nobis voluptatibus reiciendis consequatur velit cum suscipit? Voluptas reiciendis in ab aliquid inventore ratione. Soluta neque asperiores culpa consequatur distinctio quis architecto voluptate expedita libero aut, tempore esse corporis eligendi saepe accusamus doloremque porro optio deleniti? Excepturi, delectus esse facilis, cupiditate quasi necessitatibus adipisci ab, vel pariatur dicta veritatis. Ipsa harum quia nulla alias ea doloremque ipsum, blanditiis minima unde optio fugiat soluta, consectetur fuga aut voluptatem sapiente libero aspernatur dicta obcaecati eaque accusamus! Omnis, iure beatae eum veniam corporis rem eveniet illum pariatur voluptate aliquid tempora nisi dolorem similique obcaecati quibusdam adipisci, deleniti saepe in inventore culpa. Unde sint corporis voluptas asperiores? Voluptatum, quo suscipit rerum iusto, quos perspiciatis veritatis aut ut, quaerat ipsa ratione eligendi dolorem totam eos debitis! Iusto autem accusantium voluptatem quo amet commodi eveniet est nesciunt nisi distinctio. Adipisci odio voluptatibus corrupti. Saepe, odit eos? Perferendis, modi fuga eligendi incidunt quis magnam alias odit dolores corporis culpa officiis. Sequi minima placeat dolore quas nesciunt obcaecati illum unde optio saepe veniam maxime facere nobis laborum inventore delectus repellat, aperiam fugit! Nisi ab a sunt.
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
