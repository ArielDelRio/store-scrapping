export interface SheinApiResponse {
  code: string;
  msg: string;
  info: SheinProductDetails;
}

export interface SheinProductDetails {
  store: "shein";
  isShowMall: string;
  selectedMallCode: string;
  mallInfoList: MallInfoList[];
  isLocalShipping: string;
  descriptionExtInfo: DescriptionExtInfo;
  cateIds: string;
  ruleType: string;
  storeCode: string;
  recShopProductReqInfo: RecShopProductReqInfo;
  goodsCategoryType: string;
  allColorDetailImages: AllColorDetailImages;
  checkSizeConfig: CheckSizeConfig;
  goods_id: string;
  goods_sn: string;
  goods_img: string;
  color_image: string;
  cate_name: string;
  isSkuData: string;
  cccDetailsTemplate: CccDetailsTemplate;
  isBraRecommendSize: string;
  return_title: string;
  is_support_return: string;
  isOutExposedShippingTime: string;
  isOutExposedShippingThreshold: string;
  multiLevelSaleAttribute: MultiLevelSaleAttribute;
  goods_desc: string;
  is_clearance: number;
  supplier_id: string;
  productDetails: ProductDetail[];
  materialDetails: MaterialDetail[];
  productRelationID: string;
  original_img: string;
  goods_name: string;
  cat_id: string;
  is_on_sale: string;
  stock: string;
  sale_price: SalePrice4;
  retail_price: RetailPrice4;
  unit_discount: string;
  is_subscription: string;
  attr_size_tips: string;
  size_and_stock: any[];
  mainSaleAttribute: MainSaleAttribute;
  nowater_gallery: NowaterGallery;
  attrSizeDict: AttrSizeDict;
  is_support_third_size_guide: string;
  lookbook: any[];
  related_color_goods: RelatedColorGood[];
  brand_badge: string;
  brand_code: string;
  series_badge: SeriesBadge;
  premiumFlagNew: PremiumFlagNew;
  video_url: string;
  is_beauty: number;
  sizeTemplate: SizeTemplate;
  isGirlShoesSize: string;
  basicCodePrefixText: string;
  featureSubscript: any[];
  business_model: string;
  storeInfo: StoreInfo;
  isDisplayFeedbackTips: string;
  brandDetailInfo: BrandDetailInfo;
  paidMemberPrice: PaidMemberPrice2;
  paidMemberMultiLanguageTips: PaidMemberMultiLanguageTips2;
}

export interface MallInfoList {
  stock: string;
  retailPrice: RetailPrice;
  salePrice: SalePrice;
  mallDescription: string[];
  mall_code: string;
  mall_name: string;
  mall_sort: string;
  unit_discount: string;
}

export interface RetailPrice {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface SalePrice {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface DescriptionExtInfo {
  cccConfigBlackAttrIds: number[];
  cccConfigOutAttrIds: any;
  cccConfigOutAttrs: any;
}

export interface RecShopProductReqInfo {
  recBrandId: string;
  recSeriesId: string;
  storeCode: string;
  productRecommendByGroup: any;
  secondSeriesId: any;
}

export interface AllColorDetailImages {
  "13541037": N13541037[];
  "16519177": N16519177[];
  "16519187": N16519187[];
  "16519190": N16519190[];
}

export interface N13541037 {
  origin_image: string;
}

export interface N16519177 {
  origin_image: string;
}

export interface N16519187 {
  origin_image: string;
}

export interface N16519190 {
  origin_image: string;
}

export interface CheckSizeConfig {
  checkSizeEditPage: CheckSizeEditPage;
  checkSizeResultPage: CheckSizeResultPage;
}

export interface CheckSizeEditPage {
  type: string;
  displayField: any;
}

export interface CheckSizeResultPage {
  type: string;
  displayField: any;
}

export interface CccDetailsTemplate {
  appTemplate: string;
  content: Content[];
  tempType: string;
}

export interface Content {
  detailImg: string;
  sizeChart: string;
  description: string;
  countCell: string;
  imgSrc: string;
  colorType: string;
}

export interface MultiLevelSaleAttribute {
  skc_name: string;
  goods_sn: string;
  goods_id: string;
  sku_list: SkuList[];
  skc_sale_attr: SkcSaleAttr[];
}

export interface SkuList {
  skuSelectedMallCode: string;
  isSupportQuickShip: string;
  sku_code: string;
  stock: string;
  mall_stock: MallStock[];
  price: Price;
  mall_price: MallPrice[];
  sku_sale_attr: SkuSaleAttr[];
  rewardPoints: number;
  doublePoints: number;
  multiPaymentShowList: MultiPaymentShowList[];
  subscribe_status: number;
  grade_status: number;
  is_default?: string;
}

export interface MallStock {
  mall_code: string;
  mall_code_sort: string;
  stock: string;
  isSupportQuickShip: boolean;
}

export interface Price {
  showPrice: ShowPrice;
  vipDiscountPrice: VipDiscountPrice;
  discountValue: string;
  retailPrice: RetailPrice2;
  unit_discount: number;
  salePrice: SalePrice2;
  paidMemberPrice: PaidMemberPrice;
  paidMemberMultiLanguageTips: PaidMemberMultiLanguageTips;
}

export interface ShowPrice {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface VipDiscountPrice {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface RetailPrice2 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface SalePrice2 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface PaidMemberPrice {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface PaidMemberMultiLanguageTips {
  exclusiveDiscountRateTips: string;
  fromPriceTips: string;
  convertDiscountValue: string;
  discountRateTips: string;
  paidMemberImgUrl: string;
  paidMemberLogoUrl: string;
  paidMemberHeadUrl: string;
}

export interface MallPrice {
  showPrice: ShowPrice2;
  vipDiscountPrice: VipDiscountPrice2;
  discountValue: string;
  mall_code: string;
  retailPrice: RetailPrice3;
  unit_discount: number;
  salePrice: SalePrice3;
  rewardPoints: number;
}

export interface ShowPrice2 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface VipDiscountPrice2 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface RetailPrice3 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface SalePrice3 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface SkuSaleAttr {
  attr_id: string;
  attr_name: string;
  attr_name_en: string;
  attr_value_id: string;
  attr_value_name: string;
  attr_value_name_en: string;
}

export interface MultiPaymentShowList {
  id: number;
  is_display: number;
  payment_code: string;
  place_order_desc: string;
  logo_url: string;
  decimal_rule: number;
  stage: number;
  show_desc_batch: ShowDescBatch[];
  logo_width: string;
  logo_height: string;
}

export interface ShowDescBatch {
  amount: string;
  desc: any;
}

export interface SkcSaleAttr {
  attr_id: string;
  attr_name: string;
  isSize: string;
  attr_value_list: AttrValueList[];
  isAttrHasRelatedDescInfo: string;
}

export interface AttrValueList {
  attr_value_id: string;
  attr_value_name: string;
  attr_value_name_en: string;
  attr_std_value: string;
  attrDescPopUp: AttrDescPopUp[];
}

export interface AttrDescPopUp {
  bindAttrData: BindAttrDaum[];
}

export interface BindAttrDaum {
  sort: number;
  attrNameKey: string;
  attrNameValue: string;
}

export interface ProductDetail {
  heelHeightRangeDesc: any;
  isHeelHeight: any;
  attr_name: string;
  attr_value: string;
  attr_name_en: string;
  attr_id: number;
  value_sort: number;
  attr_desc: string;
  attr_image: string;
  attrImgList: any;
  attr_sort: number;
  attr_value_id: string;
  attr_value_id_for_sort: number;
}

export interface MaterialDetail {
  attr_name: string;
  attr_value: string;
}

export interface SalePrice4 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface RetailPrice4 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface MainSaleAttribute {
  mainSaleAttrDesc: string;
  canShowLargeImg: string;
  mainSaleAttrShowMode: string;
  info: Info2[];
}

export interface Info2 {
  attr_id: string;
  attr_name: string;
  attr_value_id: string;
  attr_value: string;
  goods_id: string;
  goods_sn: string;
  goods_color_image: string;
  goods_image: string;
  hot_color: string;
  isEco: string;
}

export interface NowaterGallery {
  detail_image: DetailImage[];
}

export interface DetailImage {
  origin_image: string;
}

export interface AttrSizeDict {
  XXS: Xxs[];
  XS: Xs[];
  S: S[];
  M: M[];
  L: L[];
  XL: Xl[];
  XXL: Xxl[];
  "3XL": N3Xl[];
  "4XL": N4Xl[];
  "5XL": N5Xl[];
}

export interface Xxs {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface Xs {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface S {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface M {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface L {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface Xl {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface Xxl {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface N3Xl {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface N4Xl {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface N5Xl {
  "Neck "?: string;
  "Back Length "?: string;
  "Bust "?: string;
}

export interface RelatedColorGood {
  goods_id: string;
  goods_sn: string;
  goods_color_name: string;
  goods_image: string;
  goods_color_image: string;
  spu_sort: number;
  attr_sort: number;
  value_sort: number;
  attr_id: string;
  attr_name: string;
  attr_value_id: string;
  attr_value: string;
  attr_value_id_for_sort: number;
  hot_color: string;
  isEco: string;
}

export interface SeriesBadge {
  name: string;
  image_url: string;
  corner_img_right: any;
  corner_img_left: any;
}

export interface PremiumFlagNew {
  brandId: string;
  brand_badge_name: string;
  brand_logo_url_left: string;
  brand_code: string;
}

export interface SizeTemplate {
  image_url: string;
  description_multi: DescriptionMulti[];
}

export interface DescriptionMulti {
  name: string;
  description: string;
  sort: number;
}

export interface StoreInfo {
  productsNum: string;
  storeLabels: any[];
  salesArea: string;
  stockMode: string;
  tocPerformParty: string;
  isBrandStore: any;
  brandSellerTips: any;
  storeRouting: string;
  localSellerBadge: LocalSellerBadge;
  business_model: string;
  store_code: string;
  title: string;
  logo: string;
  descriptions: string;
  storeStatus: string;
  storeBusinessType: string;
  storeStyle: string;
  storeSignsStyle: string;
  storeType: string;
  storeShowType: string;
}

export interface LocalSellerBadge {
  tag_val_name_lang: string;
  tag_val_name_lang_en: string;
  tag_text_color: string;
  tag_bg_color: string;
}

export interface BrandDetailInfo {
  brandLabelTips: any;
  brand_code: string;
  name: string;
  brand_logo: string;
  brand_type: string;
  brand_show_arr: string[];
  brand_introduction: string;
  brand_select_info: BrandSelectInfo;
}

export interface BrandSelectInfo {
  select_name: string;
  sc_url_id: string;
  select_type_id: string;
  select_type_name: string;
  description: string;
  sc_url: string;
  main_site: string;
  brand_code: string;
}

export interface PaidMemberPrice2 {
  amount: string;
  amountWithSymbol: string;
  usdAmount: string;
  usdAmountWithSymbol: string;
  priceShowStyle: string;
}

export interface PaidMemberMultiLanguageTips2 {
  exclusiveDiscountRateTips: string;
  fromPriceTips: string;
  sheinClubTips: string;
  exclusiveTips: string;
  convertDiscountValue: string;
  discountRateTips: string;
  paidMemberImgUrl: string;
  paidMemberLogoUrl: string;
  paidMemberHeadUrl: string;
}
