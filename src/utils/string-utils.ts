/**
 * Returns the name of specified property.
 * If the specified property name does not match a property of the specified type, the type checker will complain.
 * @param name - The name of the property to extract.
 * @returns The name of the specified property property.
 * @example
 * class MyClass {
 *   myProp = 12;
 * }
 *
 * const propName = nameof<MyClass>('myProp'); // is 'myProp'
 */
export const nameof = <T>(name: Extract<keyof T, string>): string => name;

/**
 * Factory function to create a typed nameof function.
 * This is e.g. useful in situations where you want to generate a bunch of property
 * names for the same type.
 * @returns a `nameof` function bound to the type provided in the factory method call.
 * @example
 * class MyClass {
 *   myProp = 12;
 * }
 *
 * const nameof = nameofFactory<MyClass>();
 * const propName = nameof('myProp');  // is 'myProp'
 */
export const nameofFactory =
  <T>() =>
  (name: Extract<keyof T, string>): string =>
    name;
