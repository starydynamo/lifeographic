<?php

class Category extends Eloquent {

	/**
	 * The database table used by the model.
	 *
	 * @var string
	 */
	protected $table = 'categories';
        
        public $timestamps = false;

	/**
	 * Switch between categories
	 * @var string
	 * @return int
	 */
	public static function switchCategory( $category ) 
	{

		switch ( $category ) 
		{

		 	case 'love':
		 		$categoryId = 1;
		 		break;

		 	case 'health':
		 		$categoryId = 2;
		 		break;

		 	case 'assets':
		 		$categoryId = 3;	
		 		break;

		 	case 'mood':
		 		$categoryId = 4;
		 		break;

		} 

		return $categoryId;

	}

	/**
     * Get class
     * @param int
     * @return string
     */

    public static function getClass( $categoryId ) 
    {

    	switch ( $categoryId ) {
    		case 1:
    			$class = 'danger';
    			break;

    		case 2:
    			$class = 'success';
    			break;
    			
    		case 3:
    			$class = 'info';
    			break;
    			
    		case 4:
    			$class = 'warning';
    			break;			
    		
    		default:
    			$class = '';
    			break;	

    	}

    	return $class;

    }

}

