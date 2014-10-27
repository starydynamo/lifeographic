<?php

use Illuminate\Auth\UserInterface;
use Illuminate\Auth\Reminders\RemindableInterface;

class CategoryValue extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'category_values';

	/**
	 * Return calculated value for a single category
	 * @param int
	 * @return double
	 */
	private static function getValue( $userId, $category_id ) 
	{

		$values = static::where('user_id', '=', $userId)
					->where('category_id', '=', $category_id)
					->get(array('category_value'));		

		if(count($values)) {

			$categoryArray = array();
			foreach($values as $value) {
				$categoryArray[] = $value->category_value;
			} 

			$categoryValue = array_sum( $categoryArray ) / count( $categoryArray );

		} else {

			$categoryValue = 0;

		}	

		return $categoryValue;	

	}

	/**
	 * Return array of categories values
	 * @return double
	 */
	public static function getValues() 
	{

		$categories = Category::all();

		$categoryValues = [];

		foreach ($categories as $category) 
		{
			
			$categoryValue = static::getValue( Auth::user()->id, $category->id );

			$categoryValues[strtolower( $category->name ) . 'Value'] = $categoryValue;

		}

		return $categoryValues;

	}

	//Just for testing
	public static function getReasons($categoryId) {
		$reasonsSerialized = static::where('user_id', '=', Auth::user()->id)
					->where('category_id', '=', $categoryId)
					->pluck('reasons');
	
		if($reasonsSerialized) 
		{
			$reasons = unserialize($reasonsSerialized);
		} else {
			$reasons = array();
		}			

		return $reasons;			
	} 


	/**
     * Count submissions for the user
     * @param int
     * @return int
     */
	public static function countSubmissions( $categoryId ) 
	{

		$last24Hours = date( 'Y-m-d h:i:s', strtotime( 'now - 24 hours' ) );

		return CategoryValue::where( 'user_id', '=', Auth::user()->id )
											->where( 'category_id', '=', $categoryId )
											->where( 'created_at', '>', $last24Hours )
											->count();

	}

	/**
     * Save category value
     * @param int
     * @return int
     */
    public static function saveValue( $bindings ) 
    {

    	$value = new CategoryValue;
    	$value->user_id     	  = $bindings['user_id'];
    	$value->category_id       = $bindings['category_id'];
    	$value->category_value    = $bindings['category_value'];
    	$value->reasons 		  = $bindings['reasons'];

    	$value->save();	

    }

    /**
     * Get descriptive value
     * @param double
     * @return string
     */

    public static function getDescriptiveValue( $value ) 
    {

    	switch ( $value ) {
    		case 20:
    			$descriptive = 'Very Bad';
    			break;

    		case 40:
    			$descriptive = 'Bad';
    			break;
    			
    		case 60:
    			$descriptive = 'OK';
    			break;
    			
    		case 80:
    			$descriptive = 'Good';
    			break;			
    		
    		case 100:
    			$descriptive = 'Very Good';
    			break;

    		default:
    			$descriptive = 'Undefined';
    			break;	

    	}

    	return $descriptive;

    }


}