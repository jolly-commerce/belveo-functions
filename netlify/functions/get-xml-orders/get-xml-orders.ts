import { Handler } from "@netlify/functions";
import js2xmlparser from "js2xmlparser";

js2xmlparser.parse("Ordini_Spedizione", {});

const example_data = [
  {
    id: 4309864120513,
    name: "#1003",
    note: null,
    test: false,
    email: "mct@murciaclubdetenis.es",
    token: "5ac08a29fee140c1245414c703090a8c",
    number: 3,
    gateway: "Bank Deposit",
    refunds: [],
    user_id: null,
    currency: "EUR",
    customer: {
      id: 5867364778177,
      email: "mct@murciaclubdetenis.es",
      accepts_marketing: false,
      created_at: "2022-03-02T13:09:31.000Z",
      updated_at: "2022-03-08T09:08:20.000Z",
      first_name: "Real Murcia Club de Tenis",
      last_name: "1919",
      orders_count: 1,
      state: "enabled",
      total_spent: "2416.00",
      last_order_id: 4309864120513,
      note: null,
      verified_email: true,
      multipass_identifier: null,
      tax_exempt: false,
      phone: null,
      tags: "",
      last_order_name: "#1003",
      currency: "EUR",
      accepts_marketing_updated_at: "2022-03-02T13:09:31.000Z",
      marketing_opt_in_level: null,
      tax_exemptions: [],
      sms_marketing_consent: null,
      admin_graphql_api_id: "gid://shopify/Customer/5867364778177",
      default_address: {
        id: 7057955094721,
        customer_id: 5867364778177,
        first_name: "Real",
        last_name: "Murcia Club de Tenis",
        company: "Real Murcia Club de Tenis 1919 (G30023402)",
        address1: "Calle Cronista Carlos ValcÃ¡rcel",
        address2: "5",
        city: "Murcia",
        province: "Murcia",
        country: "Spain",
        zip: "30008",
        phone: "+34968234917",
        name: "Real Murcia Club de Tenis",
        province_code: "MU",
        country_code: "ES",
        country_name: "Spain",
        default: true,
      },
    },
    closed_at: null,
    confirmed: true,
    device_id: null,
    reference: "ee146908f490dac2904913d9c99422e3",
    total_tax: "419.31",
    cart_token: "2ded6341ec0c4b248b1f2df34dc3c090",
    created_at: "2022-03-03T09:25:29.000Z",
    line_items: [
      {
        id: 10866737381569,
        admin_graphql_api_id: "gid://shopify/LineItem/10866737381569",
        fulfillable_quantity: 6,
        fulfillment_service: "manual",
        fulfillment_status: null,
        gift_card: false,
        grams: 28200,
        name: "Foehn 3x3m - Crudo",
        origin_location: {
          id: 3325977067713,
          country_code: "FR",
          province_code: "",
          name: "170 AllÃ©e de l'Ecopark",
          address1: "170 AllÃ©e de l'Ecopark",
          address2: "",
          city: "Wambrechies",
          zip: "59118",
        },
        price: "399.00",
        price_set: {
          shop_money: {
            amount: "399.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "399.00",
            currency_code: "EUR",
          },
        },
        product_exists: true,
        product_id: 7128828379329,
        properties: [],
        quantity: 6,
        requires_shipping: true,
        sku: "802903",
        taxable: true,
        title: "Foehn 3x3m",
        total_discount: "0.00",
        total_discount_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "EUR",
          },
        },
        variant_id: 41313032241345,
        variant_inventory_management: "shopify",
        variant_title: "Crudo",
        vendor: "Belveo-ES",
        tax_lines: [
          {
            channel_liable: false,
            price: "415.49",
            price_set: {
              shop_money: {
                amount: "415.49",
                currency_code: "EUR",
              },
              presentment_money: {
                amount: "415.49",
                currency_code: "EUR",
              },
            },
            rate: 0.21,
            title: "ES IVA",
          },
        ],
        duties: [],
        discount_allocations: [],
      },
    ],
    source_url: null,
    updated_at: "2022-03-08T09:08:17.000Z",
    location_id: null,
    total_price: "2416.00",
    __IMTINDEX__: 1,
    cancelled_at: null,
    fulfillments: [],
    landing_site: "/cart",
    processed_at: "2022-03-03T09:25:27.000Z",
    total_weight: 169200,
    __IMTLENGTH__: 2,
    cancel_reason: null,
    payment_terms: null,
    checkout_token: "042c7523bda932fd329b2be9083a75bf",
    referring_site: "https://belveo.es/account",
    shipping_lines: [
      {
        id: 3630879506625,
        carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
        code: "Standard International",
        delivery_category: null,
        discounted_price: "22.00",
        discounted_price_set: {
          shop_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
        },
        phone: null,
        price: "22.00",
        price_set: {
          shop_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
        },
        requested_fulfillment_service_id: null,
        source: "shopify",
        title: "Standard International",
        tax_lines: [
          {
            channel_liable: false,
            price: "3.82",
            price_set: {
              shop_money: {
                amount: "3.82",
                currency_code: "EUR",
              },
              presentment_money: {
                amount: "3.82",
                currency_code: "EUR",
              },
            },
            rate: 0.21,
            title: "ES IVA",
          },
        ],
        discount_allocations: [],
      },
    ],
    subtotal_price: "2394.00",
    taxes_included: true,
    billing_address: {
      first_name: "Real",
      address1: "Calle Cronista Carlos ValcÃ¡rcel",
      phone: "+34968234917",
      city: "Murcia",
      zip: "30008",
      province: "Murcia",
      country: "Spain",
      last_name: "Murcia Club de Tenis",
      address2: "5",
      company: "Real Murcia Club de Tenis 1919 (G30023402)",
      latitude: 37.9929719,
      longitude: -1.1339935,
      name: "Real Murcia Club de Tenis",
      country_code: "ES",
      province_code: "MU",
    },
    estimated_taxes: false,
    total_discounts: "0.00",
    total_price_usd: "2689.23",
    financial_status: "paid",
    shipping_address: {
      first_name: "Real",
      address1: "Calle Cronista Carlos ValcÃ¡rcel",
      phone: "+34968234917",
      city: "Murcia",
      zip: "30008",
      province: "Murcia",
      country: "Spain",
      last_name: "Murcia Club de Tenis",
      address2: "5",
      company: "Real Murcia Club de Tenis 1919 (G30023402)",
      latitude: 37.9929719,
      longitude: -1.1339935,
      name: "Real Murcia Club de Tenis",
      country_code: "ES",
      province_code: "MU",
    },
    source_identifier: "ee146908f490dac2904913d9c99422e3",
    total_line_items_price: "2394.00",
    buyer_accepts_marketing: false,
  },
  {
    id: 4297531457729,
    name: "#1002",
    note: null,
    test: false,
    email: "paganfabrice@hotmail.fr",
    token: "9b56c93fc2e066ecefef9734e490db3f",
    number: 2,
    gateway: "_credit_card",
    refunds: [],
    user_id: null,
    currency: "EUR",
    customer: {
      id: 5856944619713,
      email: "paganfabrice@hotmail.fr",
      accepts_marketing: false,
      created_at: "2022-02-21T16:30:02.000Z",
      updated_at: "2022-02-22T10:13:40.000Z",
      first_name: "Fabrice",
      last_name: "PAGAN CEDELLE",
      orders_count: 1,
      state: "disabled",
      total_spent: "421.00",
      last_order_id: 4297531457729,
      note: null,
      verified_email: true,
      multipass_identifier: null,
      tax_exempt: false,
      phone: "+33660231316",
      tags: "",
      last_order_name: "#1002",
      currency: "EUR",
      accepts_marketing_updated_at: "2022-02-21T16:30:02.000Z",
      marketing_opt_in_level: null,
      tax_exemptions: [],
      sms_marketing_consent: {
        state: "not_subscribed",
        opt_in_level: "single_opt_in",
        consent_updated_at: null,
        consent_collected_from: "SHOPIFY",
      },
      admin_graphql_api_id: "gid://shopify/Customer/5856944619713",
      default_address: {
        id: 7046134628545,
        customer_id: 5856944619713,
        first_name: "Fabrice",
        last_name: "PAGAN CEDELLE",
        company: null,
        address1: "Carrer de la DiputaciÃ³ 178",
        address2: "Atico 3",
        city: "Barcelona",
        province: "Barcelona",
        country: "Spain",
        zip: "08011",
        phone: null,
        name: "Fabrice PAGAN CEDELLE",
        province_code: "B",
        country_code: "ES",
        country_name: "Spain",
        default: true,
      },
    },
    closed_at: null,
    confirmed: true,
    device_id: null,
    reference: "be6522c5d1e1b239097f30681fa8202e",
    total_tax: "73.07",
    cart_token: "51d5adaae643be7d0b6c30d9385b746e",
    created_at: "2022-02-21T16:33:50.000Z",
    line_items: [
      {
        id: 10841972244673,
        admin_graphql_api_id: "gid://shopify/LineItem/10841972244673",
        fulfillable_quantity: 1,
        fulfillment_service: "manual",
        fulfillment_status: null,
        gift_card: false,
        grams: 28200,
        name: "Foehn 3x3m - Crudo",
        origin_location: {
          id: 3325977067713,
          country_code: "FR",
          province_code: "",
          name: "170 AllÃ©e de l'Ecopark",
          address1: "170 AllÃ©e de l'Ecopark",
          address2: "",
          city: "Wambrechies",
          zip: "59118",
        },
        price: "399.00",
        price_set: {
          shop_money: {
            amount: "399.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "399.00",
            currency_code: "EUR",
          },
        },
        product_exists: true,
        product_id: 7128828379329,
        properties: [],
        quantity: 1,
        requires_shipping: true,
        sku: "802903",
        taxable: true,
        title: "Foehn 3x3m",
        total_discount: "0.00",
        total_discount_set: {
          shop_money: {
            amount: "0.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "0.00",
            currency_code: "EUR",
          },
        },
        variant_id: 41313032241345,
        variant_inventory_management: "shopify",
        variant_title: "Crudo",
        vendor: "Belveo-ES",
        tax_lines: [
          {
            channel_liable: false,
            price: "69.25",
            price_set: {
              shop_money: {
                amount: "69.25",
                currency_code: "EUR",
              },
              presentment_money: {
                amount: "69.25",
                currency_code: "EUR",
              },
            },
            rate: 0.21,
            title: "ES IVA",
          },
        ],
        duties: [],
        discount_allocations: [],
      },
    ],
    source_url: null,
    updated_at: "2022-02-22T10:15:13.000Z",
    location_id: null,
    total_price: "421.00",
    __IMTINDEX__: 2,
    cancelled_at: null,
    fulfillments: [],
    landing_site: "/",
    processed_at: "2022-02-21T16:27:08.000Z",
    total_weight: 28200,
    __IMTLENGTH__: 2,
    cancel_reason: null,
    payment_terms: null,
    checkout_token: "55e17f1b2102c42672d7300b79d5a0b6",
    referring_site: "",
    shipping_lines: [
      {
        id: 3621260460225,
        carrier_identifier: "650f1a14fa979ec5c74d063e968411d4",
        code: "Standard International",
        delivery_category: null,
        discounted_price: "22.00",
        discounted_price_set: {
          shop_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
        },
        phone: null,
        price: "22.00",
        price_set: {
          shop_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
          presentment_money: {
            amount: "22.00",
            currency_code: "EUR",
          },
        },
        requested_fulfillment_service_id: null,
        source: "shopify",
        title: "Standard International",
        tax_lines: [
          {
            channel_liable: false,
            price: "3.82",
            price_set: {
              shop_money: {
                amount: "3.82",
                currency_code: "EUR",
              },
              presentment_money: {
                amount: "3.82",
                currency_code: "EUR",
              },
            },
            rate: 0.21,
            title: "ES IVA",
          },
        ],
        discount_allocations: [],
      },
    ],
    subtotal_price: "399.00",
    taxes_included: true,
    billing_address: {
      first_name: "Fabrice",
      address1: "Carrer de Villarroel 68",
      phone: null,
      city: "Barcelona",
      zip: "08011",
      province: "Barcelona",
      country: "Spain",
      last_name: "PAGAN CEDELLE",
      address2: "Atico 3",
      company: null,
      latitude: 41.3838806,
      longitude: 2.1590069,
      name: "Fabrice PAGAN CEDELLE",
      country_code: "ES",
      province_code: "B",
    },
    estimated_taxes: false,
    total_discounts: "0.00",
    total_price_usd: "476.45",
    financial_status: "paid",
    shipping_address: {
      first_name: "Fabrice",
      address1: "Carrer de la DiputaciÃ³ 178",
      phone: null,
      city: "Barcelona",
      zip: "08011",
      province: "Barcelona",
      country: "Spain",
      last_name: "PAGAN CEDELLE",
      address2: "Atico 3",
      company: null,
      latitude: 41.3845087,
      longitude: 2.1594094,
      name: "Fabrice PAGAN CEDELLE",
      country_code: "ES",
      province_code: "B",
    },
    source_identifier: "be6522c5d1e1b239097f30681fa8202e",
    total_line_items_price: "399.00",
    buyer_accepts_marketing: false,
  },
];

type data_type = typeof example_data;

export const handler: Handler = async (event, context) => {
  let body: data_type = JSON.parse(event.body);

  const result = body.map((order) => ({
    Testata_Ordine: {
      Codice_Cliente: order.customer.id,
      Numero_Ordine: order.id,
      Data_Ordine: order.id,
      Ragione_Sociale_Destinatario: `<![CDATA[ ${order.shipping_address.first_name} ${order.shipping_address.last_name}]]>`,
      Indirizzo_Destinatario: order.shipping_address.address1,
      Localita_Destinazione_Merce: order.billing_address.city,
      CAP_Destinazione_Merce: order.billing_address.zip,
      Provincia_Destinazione_Merce: order.billing_address.province_code,
      Nazione_Destinazione_Merce: order.billing_address.country_code,
      Righe_Ordine: [
        order.line_items.map((line_item, k) => ({
          Riga_Ordine: {
            Codice_Cliente: order.customer.id,
            Numero_Ordine: order.id,
            Numero_Riga: order.line_items.length,
            Numero_SottoRiga: k + 1,
            Codice_Articolo: line_item.sku,
            Quantita_da_Spedire: line_item.quantity,
          },
        })),
      ],
    },
  }));
  return {
    statusCode: 200,
    body: js2xmlparser.parse("Ordini_Spedizione", result),
  };
};
