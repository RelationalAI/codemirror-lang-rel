export const functionsInfo: Record<string, string> = {
  abs: `abs[x]
  
The absolute value of x.`,
  table: `table[R]

Display a structured (overloaded) relation that represents tabular data as a table, if it's supported by the client.\n
The input is expected to be a relation that represents a table *column-wise*, such as the result of importing a CSV file, or i.e. a module. The module provided as input can be thought of like a dataframe in other systems. The client will attempt to display a table from whatever module you pass in, even if the data is sparse, or not all of the same arity.
    
Includes the original relation together with a MIME-type indicating the relation represents a table, in order to be rendered on the client.
  `,
  tan: `tan[x]

Tangent of x (given in radians).

Defined for non-infinite \`x\`.`
}
