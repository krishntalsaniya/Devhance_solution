import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const list = [
    {
        id : 1,
        para : `Divide packages weighing over 25kg into two cartons whenever feasible.`
    },
    {
        id : 2,
        para : `Utilise cushioning materials to safeguard goods during transportation.`
    },
    {
        id : 3,
        para : `Seal all cartons securely using strong tape to prevent accidental opening.`
    },
    {
        id : 4,
        para : `Clearly mark "FRAGILE" on boxes that require delicate handling.`
    },
    {
        id : 5,
        para : `Familiarise yourself with our`,
        link:` Terms of Carriage.`
    },
    {
        id : 6,
        para : `Print and affix the consignment note securely to the carton.`
    },
    {
        id : 7,
        para : `Clearly write the delivery address and consignment number on the box.`
    },
    {
        id : 8,
        para : `Remove any previous delivery labels from the box.`
    },
    {
        id : 9,
        para : `Large and unpackaged items will not be accepted for shipping.`
    },
    {
        id : 10,
        para : `Items exceeding 25kg must be palletised or crated for easy forklift handling.`
    },
    {
        id : 11,
        para : `Ensure lifting equipment is available at both sending and receiving locations where applicable.`
    },
    {
        id : 12,
        para : `If shipping items over 25kg, ensure assistance is available for loading and unloading. `
    },
    {
        id : 13,
        para : `Secure items on pallets properly and prevent overhang.`
    },
    {
        id : 14,
        para : `Package obscure objects into crates to qualify for transit warranty coverage.`
    },
    {
        id : 15,
        para : `Ensure strapping does not obstruct forklift tongues during loading and unloading operations.`
    }
]

const para = [
    {
        id:1,
        info:`Shipments must be appropriately sized and packaged to ensure they can withstand the rigors of travel and arrive at their destination intact.`
    },
    {
        id:2,
        info:`For health and safety reasons, it's crucial to ensure that shipments are properly sized and packaged. This helps to minimise the risk of accidents or injuries during transportation and handling, protecting both the goods being shipped and the individuals involved in the shipping process.`
    },
    {
        id:3,
        info:`Pallet wrap should be used when securing items on a pallet for transportation or storage. It helps to prevent shifting, sliding, and damage during handling and transit.`
    },
]

function Shipping() {
  return (
    <>
      <div className="shipping">
        <div className="ship-left">
            <div className="shdata">
                <h1  data-aos="fade-up"
     data-aos-anchor-placement="center-bottom"  data-aos-delay="2000">Shipping Guidelines</h1>
                <p>
                    These guidelines are for ensuring safe and efficient shipping with National Freight and Logistics Services. They include tips for packaging, labeling, securing items, and selecting appropriate shipping options, all aimed at safeguarding goods during transit and complying with our terms of carriage.
                </p>
            </div>
        </div>
        <div className="ship-right">
            <div className="shdata">
                <ol>
                    {
                        list.map((item)=>
                            <li key={item.id}> {item.para} {item.link}</li>
                        )
                    }
                </ol>
            </div>

        </div>
      </div>
      {/* ---image- */}
      <div className="shipping">
        <div className="ship-left ship-1-left">
            <div className="shdata">
                <h5>MEASURING A BOX OR PALLET/CRATE</h5>
                <p>
                    Please refer to the image below for accurate measurements of your box or pallet size.
                </p>
                <img src="/images/tips.jpg" alt="" />
            </div>
        </div>
        <div className="ship-right ship-2-right">
            <div className="shdata">
                <h2> Prioritising Safety in Shipments: Sizing and Packaging Guidelines</h2>

                {
                    para.map((item)=>
                    <p key={item.id}>{item.info}</p>
                    )
                }
            </div>

        </div>
      </div>

      
    </>
  )
}

export default Shipping
