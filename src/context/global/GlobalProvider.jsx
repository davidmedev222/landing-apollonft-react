import { GlobalContext } from './GlobalContext'

const GlobalProvider = ({ children }) => {
  const data = {
    header: {
      title: 'ApolloNFT',
      navbar: [
        {
          id: 1,
          text: 'Drop',
          to: 'drop'
        },
        {
          id: 2,
          text: 'Marketplace',
          to: 'marketplace'
        },
        {
          id: 3,
          text: 'Creator',
          to: 'creator'
        },
        {
          id: 4,
          text: 'Community',
          to: 'community'
        }
      ],
      button: 'Contact Us'
    },
    hero: {
      title1: 'Create Your Own',
      span: 'NFT Dream',
      title2: 'Gallery',
      button: 'Discover NFT',
      paragraph:
        'The Larges NFT Marketplace. Automatic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology.',
      images: [
        {
          id: 1,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/hero-img1_wzgbg3_j7fwm3.webp',
          alt: 'mono nft',
          className: 'hero-img hero-img-one'
        },
        {
          id: 2,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146118/apollonft/images/hero-img2_rfg7tq.webp',
          alt: 'mono nft',
          className: 'hero-img hero-img-two'
        }
      ]
    },
    stats: [
      { id: 1, title: 'Artwork', stat: '25.1k' },
      { id: 2, title: 'Artist', stat: '15.6k' },
      { id: 3, title: 'Audition', stat: '10h.2k' }
    ],
    brands: [
      {
        id: 1,
        icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673556438/apollonft/coinbase_ekf4za.svg',
        alt: 'icono coinbase'
      },
      {
        id: 2,
        icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673556438/apollonft/spotify_iutqi0.svg',
        alt: 'icono spotify'
      },
      {
        id: 3,
        icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673556438/apollonft/slack_yik87q.svg',
        alt: 'icono slack'
      },
      {
        id: 4,
        icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673556438/apollonft/webflow_i8kuha.svg',
        alt: 'icono webflow'
      },
      {
        id: 5,
        icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673556438/apollonft/dropbox_f1kkyk.svg',
        alt: 'icono dropbox'
      }
    ],
    shop: {
      title: 'Super Drop',
      buttons: [
        { id: 1, text: 'Hope Ape', className: 'shop-btn-filter-active' },
        { id: 2, text: 'Abstract' },
        { id: 3, text: 'Monkey' },
        { id: 4, text: 'Cars' },
        { id: 5, text: 'Art' }
      ],
      articles: [
        {
          id: 1,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img1_wxmb4u_tup2cl.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        },
        {
          id: 2,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img6_udz799_nrzc7m.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        },
        {
          id: 3,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img2_qwi8hz_kotmsj.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        },
        {
          id: 4,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img7_kwb15r_gds9sd.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        },
        {
          id: 5,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img5_ogpksq_pxfjla.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        },
        {
          id: 6,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img4_nmbyof_afqk8v.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        },
        {
          id: 7,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img3_hkn0xh_whvgrd.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        },
        {
          id: 8,
          image:
            'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678146117/apollonft/images/img8_r6byjh_qx8oc1.webp',
          name: 'ArtCrypto',
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673557547/apollonft/eth_t5iunn.svg',
          value: '0.25 ETH',
          page: '1 of 32',
          hour: '3h 25m 3s',
          bid: 'Place a bid'
        }
      ],
      button: 'View More'
    },
    creations: {
      create: {
        title: 'Create Your Sell NFT',
        articles: [
          {
            id: 1,
            icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673558743/apollonft/wallet_n4iwd2.svg',
            title: 'Connect Wallet',
            paragraph:
              'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.'
          },
          {
            id: 2,
            icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673558745/apollonft/buy_tgy1oz.svg',
            title: 'NFT Marketplace',
            paragraph:
              'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.'
          },
          {
            id: 3,
            icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673558746/apollonft/category_wurcpj.svg',
            title: 'Collect NFT',
            paragraph:
              'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.'
          }
        ]
      },
      creator: {
        title: 'Creator of The Week',
        users: [
          {
            id: 1,
            image:
              'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678147271/apollonft/users/user1_nnydjy_kbrbdf.webp',
            name: 'Eka Prakasa',
            stat: '12.2k'
          },
          {
            id: 2,
            image:
              'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678147271/apollonft/users/user3_oeszuw_rqjq0m.webp',
            name: 'Eka Prakasa',
            stat: '12.2k'
          },
          {
            id: 3,
            image:
              'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678147271/apollonft/users/user2_zumdgm_gttnum.webp',
            name: 'Eka Prakasa',
            stat: '12.2k'
          },
          {
            id: 4,
            image:
              'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678147271/apollonft/users/user5_wom56h_an7mgm.webp',
            name: 'Eka Prakasa',
            stat: '12.2k'
          },
          {
            id: 5,
            image:
              'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678147271/apollonft/users/user6_x13lad_ef47ox.webp',
            name: 'Eka Prakasa',
            stat: '12.2k'
          },
          {
            id: 6,
            image:
              'https://res.cloudinary.com/dos3i5jqy/image/upload/v1678147271/apollonft/users/user4_nd8ijm_lfiafp.webp',
            name: 'Eka Prakasa',
            stat: '12.2k'
          }
        ],
        button: 'Watch Video'
      }
    },
    banner: {
      title: 'Joint Our Community',
      button: 'Get Started'
    },
    footer: {
      title: 'Apollo NFT',
      paragraph:
        'This growth plan will help you reach your resolutions and achieve the goals you have been striving towards.',
      social: [
        {
          id: 1,
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673560541/apollonft/icons/twitter_jzyuz3.svg',
          alt: 'icono de twitter'
        },
        {
          id: 2,
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673560540/apollonft/icons/linkedin_g3s1u2.svg',
          alt: 'icono de linkedin'
        },
        {
          id: 3,
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673560537/apollonft/icons/github_raqc62.svg',
          alt: 'icono de github'
        },
        {
          id: 4,
          icon: 'https://res.cloudinary.com/dos3i5jqy/image/upload/v1673560538/apollonft/icons/facebook_djgcvo.svg',
          alt: 'icono de facebook'
        }
      ],
      navbar: [
        {
          id: 1,
          title: 'Marketplace',
          links: [
            { id: 1, name: 'Buy Product', to: '' },
            { id: 2, name: 'Sell Product', to: '' },
            { id: 3, name: 'Out Creator', to: '' }
          ]
        },
        {
          id: 2,
          title: 'Resources',
          links: [
            { id: 1, name: 'About Us', to: '/' },
            { id: 2, name: 'Event', to: '/' },
            { id: 3, name: 'Tutorial', to: '/' }
          ]
        },
        {
          id: 3,
          title: 'Company',
          links: [
            { id: 1, name: 'Media', to: '/' },
            { id: 2, name: 'Blog', to: '/' },
            { id: 3, name: 'Pricing', to: '/' }
          ]
        },
        {
          id: 4,
          title: 'Legal',
          links: [
            { id: 1, name: 'Terms', to: '/' },
            { id: 2, name: 'Privacy', to: '/' },
            { id: 3, name: 'Support', to: '/' }
          ]
        }
      ],
      copyright: '© 2077 ApolloNFT. All rights reserved.'
    }
  }

  return <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
}

export { GlobalProvider }
