
export function getStructure() {
    return {
      href: route("item.store"),
      method: "post",
      open: false,
      data: {},
      only:["message","items"]
    }; 

}


